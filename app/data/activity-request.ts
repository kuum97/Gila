import { ActivityRequest } from '@prisma/client';
import { getCurrentUserId } from '@/app/data/user';
import { db } from '@/lib/db';
import { ActivityRequestWithActivity, ActivityRequestWithUser } from '@/type';

// 전부 10개
export const getRegisteredActivities = async (): Promise<{
  activities: ActivityRequest[];
  cursorId: string | null;
}> => {
  try {
    const userId = await getCurrentUserId();

    const registeredActivityRequests = await db.activityRequest.findMany({
      where: { requestUserId: userId },
      include: {
        activity: true,
      },
      take: 10,
      orderBy: {
        id: 'asc',
      },
    });

    const lastActivityRequest = registeredActivityRequests[registeredActivityRequests.length - 1];
    const cursorId = lastActivityRequest ? lastActivityRequest.id : null;

    return { activities: registeredActivityRequests, cursorId };
  } catch (error) {
    throw new Error('활동 요청을 가져오는 중에 에러가 발생하였습니다.');
  }
};

export const getRequestedActivities = async (): Promise<{
  activities: ActivityRequestWithActivity[];
  cursorId: string | null;
}> => {
  try {
    const userId = await getCurrentUserId();

    const requestedActivities = await db.activityRequest.findMany({
      where: { requestUserId: userId },
      include: {
        activity: true,
      },
      take: 10,
      orderBy: {
        id: 'asc',
      },
    });

    const lastActivityRequest = requestedActivities[requestedActivities.length - 1];
    const cursorId = lastActivityRequest ? lastActivityRequest.id : null;

    return { activities: requestedActivities, cursorId };
  } catch (error) {
    throw new Error('신청한 활동을 가져오는 중에 에러가 발생하였습니다.');
  }
};

export const getActivityRequestsByActivityId = async (
  activityId: string,
): Promise<{
  requests: ActivityRequestWithUser[];
  cursorId: string | null;
}> => {
  try {
    const activityRequests = await db.activityRequest.findMany({
      where: { activityId },
      include: { requestUser: true },
      take: 10,
      orderBy: {
        id: 'asc',
      },
    });

    const lastActivityRequest = activityRequests[activityRequests.length - 1];
    const cursorId = lastActivityRequest ? lastActivityRequest.id : null;

    return { requests: activityRequests, cursorId };
  } catch (error) {
    throw new Error('활동 요청을 가져오는 중에 에러가 발생하였습니다.');
  }
};
