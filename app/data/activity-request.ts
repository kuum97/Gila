'use server';

import { getCurrentUserId } from '@/app/data/user';
import { db } from '@/lib/db';
import { RequestWithActivity, RequestWithReqUserAndActivity } from '@/type';
import { revalidatePath } from 'next/cache';

export const getMySentRequests = async ({
  cursor,
  take = 10,
}: {
  cursor?: string;
  take?: number;
}): Promise<{ requests: RequestWithActivity[]; cursorId: string | null }> => {
  try {
    const userId = await getCurrentUserId();

    const requests = await db.activityRequest.findMany({
      where: { requestUserId: userId },
      include: {
        activity: true,
      },
      cursor: cursor ? { id: cursor } : undefined,
      skip: cursor ? 1 : 0,
      take,
      orderBy: {
        id: 'asc',
      },
    });

    const lastActivityRequest = requests[requests.length - 1];
    const cursorId = lastActivityRequest ? lastActivityRequest.id : null;

    return { requests, cursorId };
  } catch (error) {
    throw new Error('활동 요청을 가져오는 중에 에러가 발생하였습니다.');
  }
};

export const getMyReceivedRequests = async ({
  cursor,
  take = 10,
}: {
  cursor?: string;
  take?: number;
}): Promise<{ requests: RequestWithReqUserAndActivity[]; cursorId: string | null }> => {
  try {
    const currentUserId = await getCurrentUserId();
    const userRequests = await db.user.findUnique({
      where: { id: currentUserId },
      select: {
        activityRequests: {
          include: {
            requestUser: {
              select: {
                id: true,
                nickname: true,
                email: true,
                image: true,
                tags: true,
                createdAt: true,
              },
            },
            activity: true,
          },
          orderBy: {
            id: 'asc',
          },
          ...(cursor && { cursor: { id: cursor } }),
          skip: cursor ? 1 : 0,
          take,
        },
      },
    });

    if (!userRequests) {
      throw new Error('사용자를 찾을 수 없습니다.');
    }

    const requests = userRequests.activityRequests;
    const lastRequest = requests[requests.length - 1];
    const cursorId = lastRequest ? lastRequest.id : null;

    revalidatePath('/promised-list');

    return { requests, cursorId };
  } catch (error) {
    throw new Error('신청한 활동을 가져오는 중에 에러가 발생했습니다.');
  }
};
