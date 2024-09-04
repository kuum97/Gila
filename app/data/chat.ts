'use server';

import { getCurrentUserId } from '@/app/data/user';
import db from '@/lib/db';
import { ActivityWithUserAndRequest } from '@/type';

const getMyChat = async ({
  cursor,
  take = 10,
}: {
  cursor?: string;
  take?: number;
}): Promise<{ activities: ActivityWithUserAndRequest[]; cursorId: string | null }> => {
  const userId = await getCurrentUserId();
  const nowDate = new Date();

  try {
    const myChat = await db.activity.findMany({
      where: { userId, endDate: { gte: nowDate } },
      include: {
        user: {
          select: {
            id: true,
            nickname: true,
            email: true,
            image: true,
            tags: true,
            createdAt: true,
          },
        },
        activityRequests: {
          where: {
            status: 'APPROVE',
          },
        },
      },
      take,
      cursor: cursor ? { id: cursor } : undefined,
      skip: cursor ? 1 : 0,
      orderBy: {
        createdAt: 'desc',
      },
    });

    const lastChat = myChat[myChat.length - 1];
    const cursorId = lastChat ? lastChat.id : null;

    return { activities: myChat, cursorId };
  } catch (error) {
    throw new Error('활동을 가져오는 중에 에러가 발생하였습니다.');
  }
};

export default getMyChat;
