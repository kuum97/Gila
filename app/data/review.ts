'use server';

import { getCurrentUserId } from '@/app/data/user';
import { db } from '@/lib/db';
import { Review } from '@prisma/client';

// eslint-disable-next-line import/prefer-default-export
export const getAvailableReviews = async ({
  cursor,
  take = 10,
}: {
  cursor?: string;
  take?: number;
}): Promise<{
  reviews: Review[];
  cursorId: string | null;
}> => {
  try {
    const userId = await getCurrentUserId();
    const currentDate = new Date();

    const activities = await db.activity.findMany({
      where: {
        endDate: {
          lt: currentDate,
        },
        activityRequests: {
          some: {
            requestUserId: userId,
            status: 'APPROVE',
          },
        },
      },
      include: {
        reviews: true,
      },
      take,
      cursor: cursor ? { id: cursor } : undefined,
      skip: cursor ? 1 : 0,
      orderBy: {
        createdAt: 'asc',
      },
    });

    const availableReviews = activities.flatMap((activity) => activity.reviews);

    const lastReview = availableReviews[availableReviews.length - 1];
    const cursorId = lastReview ? lastReview.id : null;

    return { reviews: availableReviews, cursorId };
  } catch (error) {
    throw new Error('리뷰를 가져오는 중에 에러가 발생하였습니다.');
  }
};

export const getReviewsByActivityId = async ({
  activityId,
  cursor,
  take = 10,
}: {
  activityId: string;
  cursor?: string;
  take?: number;
}): Promise<{
  reviews: Review[];
  cursorId: string | null;
}> => {
  try {
    const reviews = await db.review.findMany({
      where: { activityId },
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
      },
      take,
      cursor: cursor ? { id: cursor } : undefined,
      skip: cursor ? 1 : 0,
      orderBy: {
        createdAt: 'desc',
      },
    });

    const lastReview = reviews[reviews.length - 1];
    const cursorId = lastReview ? lastReview.id : null;
    
    return {
      reviews,
      cursorId,
    };
  } catch (error) {
    throw new Error('리뷰를 가져오는 중에 에러가 발생하였습니다.');
  }
};
