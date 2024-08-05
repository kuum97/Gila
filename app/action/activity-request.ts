'use server';

import db from '@/lib/db';
import { ActionType } from '@/type';
import { ActivityRequest } from '@prisma/client';
import { getCurrentUserId } from '../data/user';

export const createActivityRequest = async (
  activityId: string,
): Promise<ActionType<ActivityRequest>> => {
  const userId = await getCurrentUserId();
  try {
    const existingRequest = await db.activityRequest.findUnique({
      where: {
        requestUserId_activityId: {
          requestUserId: userId,
          activityId,
        },
      },
    });

    if (existingRequest) {
      return { success: false, message: '이미 생성된 요청이 있습니다.' };
    }

    const myActivity = await db.activity.findUnique({
      where: {
        id: activityId,
      },
    });

    if (myActivity?.userId === userId) {
      return { success: false, message: '본인의 활동은 신청할 수 없습니다.' };
    }

    const activityRequest = await db.activityRequest.create({
      data: {
        requestUserId: userId,
        activityId,
      },
    });

    if (!activityRequest) return { success: false, message: '요청 생성에 실패하였습니다.' };

    return { success: true, message: '요청 생성에 성공하였습니다.' };
  } catch (error) {
    return { success: false, message: '요청 생성 중에 에러가 발생하였습니다.' };
  }
};

export const approveActivityRequest = async (
  requestId: string,
): Promise<ActionType<ActivityRequest>> => {
  try {
    const activityRequest = await db.activityRequest.update({
      where: { id: requestId },
      data: { status: 'APPROVE' },
    });

    if (!activityRequest) return { success: false, message: '요청 승인에 실패하였습니다.' };

    return { success: true, message: '요청 승인에 성공하였습니다.' };
  } catch (error) {
    return { success: false, message: '요청 승인 중에 에러가 발생하였습니다.' };
  }
};

export const rejectActivityRequest = async (
  requestId: string,
): Promise<ActionType<ActivityRequest>> => {
  try {
    const activityRequest = await db.activityRequest.update({
      where: { id: requestId },
      data: { status: 'REJECT' },
    });

    if (!activityRequest) return { success: false, message: '요청 거절에 실패하였습니다.' };

    return { success: true, message: '요청 거절에 성공하였습니다.' };
  } catch (error) {
    return { success: false, message: '요청 거절 중에 에러가 발생하였습니다.' };
  }
};

export const deleteActivityRequest = async (
  requestId: string,
): Promise<ActionType<ActivityRequest>> => {
  try {
    const activityRequest = await db.activityRequest.delete({
      where: { id: requestId },
    });

    if (!activityRequest) return { success: false, message: '요청 삭제에 실패하였습니다.' };

    return { success: true, message: '요청 삭제에 성공하였습니다.' };
  } catch (error) {
    return { success: false, message: '요청 삭제 중에 에러가 발생하였습니다.' };
  }
};
