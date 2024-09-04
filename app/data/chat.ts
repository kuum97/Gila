'use server';

import { getCurrentUserId } from '@/app/data/user';
import db from '@/lib/db';
import { ActivityWithFavoriteAndCount } from '@/type';

const getMyChat = async ({
  cursor,
  take = 10,
}: {
  cursor?: string;
  take?: number;
}): Promise<{ activities: ActivityWithFavoriteAndCount[]; cursorId: string | null }> => {
  const userId = await getCurrentUserId();
  const nowDate = new Date();

  try {
    const myActivities = await db.activity.findMany({
      where: { userId, endDate: { gte: nowDate } },
      include: {
        _count: {
          select: { favorites: true },
        },
        favorites: {
          where: {
            userId,
          },
          select: {
            id: true,
          },
        },
      },
      take,
      cursor: cursor ? { id: cursor } : undefined,
      skip: cursor ? 1 : 0,
      orderBy: {
        createdAt: 'asc',
      },
    });

    const lastActivity = myActivities[myActivities.length - 1];
    const cursorId = lastActivity ? lastActivity.id : null;

    // Map over activities and add `isFavo` property
    const activitiesWithFavo = myActivities.map((activity) => {
      const isFavorite = activity.favorites.length > 0;
      return { ...activity, isFavorite };
    });

    return { activities: activitiesWithFavo, cursorId };
  } catch (error) {
    throw new Error('활동을 가져오는 중에 에러가 발생하였습니다.');
  }
};

export default getMyChat;
