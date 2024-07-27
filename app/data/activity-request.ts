'use server';

import { getCurrentUserId } from '@/app/data/user';
import { db } from '@/lib/db';
import { RequestWithActivity, RequestWithActivityAndReqUser } from '@/type';

export const getMyRequests = async ({
  cursor,
  take = 10,
}: {
  cursor?: string;
  take?: number;
}): Promise<{
  requests: RequestWithActivity[];
  cursorId: string | null;
}> => {
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

export const getRequestsByActivityId = async ({
  activityId,
  cursor,
  take = 10,
}: {
  activityId: string;
  cursor?: string;
  take?: number;
}): Promise<{
  requests: RequestWithActivityAndReqUser[];
  cursorId: string | null;
}> => {
  try {
    const requests = await db.activityRequest.findMany({
      where: { activityId },
      include: {
        activity: true,
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
    throw new Error('신청한 활동을 가져오는 중에 에러가 발생하였습니다.');
  }
};
