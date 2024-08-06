'use server';

import { getCurrentUserId } from '@/app/data/user';
import db from '@/lib/db';
import { ActionType } from '@/type';
import { Favorite } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const toggleFavorite = async (activityId: string): Promise<ActionType<Favorite>> => {
  const userId = await getCurrentUserId();
  try {
    const existingFavorite = await db.favorite.findFirst({
      where: {
        activityId,
        userId,
      },
    });

    if (existingFavorite) {
      await db.favorite.delete({
        where: {
          id: existingFavorite.id,
        },
      });
      revalidatePath(`/${activityId}`);

      return { success: true, message: '즐겨찾기에서 삭제되었습니다.' };
    }

    const newFavorite = await db.favorite.create({
      data: {
        userId,
        activityId,
      },
    });

    if (!newFavorite) return { success: false, message: '즐겨찾기 추가에 실패하였습니다.' };
    revalidatePath('/my-activity', 'page');

    return {
      success: true,
      message: '즐겨찾기에 추가되었습니다.',
      data: newFavorite,
    };
  } catch (error) {
    return {
      success: false,
      message: '즐겨찾기 토글 중에 에러가 발생하였습니다.',
    };
  }
};

export default toggleFavorite;
