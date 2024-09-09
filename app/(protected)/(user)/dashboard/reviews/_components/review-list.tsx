'use client';

import { useState, useTransition } from 'react';

import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import ReviewsCard from '@/app/(protected)/(user)/dashboard/reviews/_components/reviews-card';

import { ActivityWithUser } from '@/type';
import { getAvailableReviewActivities } from '@/app/data/activity';
import Link from 'next/link';
import Image from 'next/image';
import ReviewCardSkeleton from '@/components/skeletons/review-card-skeleton';

type Props = {
  activities: ActivityWithUser[];
  cursorId: string | null;
};
export default function ReviewList({ activities, cursorId }: Props) {
  const [isPending, startTransition] = useTransition();
  const [initActivities, setInitActivities] = useState(activities);
  const [initCursor, setInitCursor] = useState(cursorId);

  const loadMoreActivities = async () => {
    startTransition(async () => {
      if (!initCursor) return;
      const result = await getAvailableReviewActivities({ take: 2, cursor: initCursor });
      setInitActivities((prev) => [...prev, ...result.activities]);
      setInitCursor(result.cursorId);
    });
  };

  const observer = useInfiniteScroll({
    callback: loadMoreActivities,
    cursorId: initCursor,
    isLoading: isPending,
  });

  const removeActivity = (activityId: string) => {
    setInitActivities((prev) => prev.filter((activity) => activity.id !== activityId));
  };

  if (activities.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 font-semibold -translate-y-16 h-screen-minus-134">
        <Image src="/GrayLogo.svg" width={150} height={50} alt="회색 로고" />
        <div className="text-center flex flex-col gap-1">
          <p className="text-lg">아직 리뷰가능한 활동이 없습니다.</p>
          <p className="text-sm font-normal">아직 길라를 한 번도 경험해 본 적이 없으시다면?</p>
        </div>
        <Link
          href="/activity-list"
          className="flex items-center justify-center px-4 py-3 font-semibold rounded-lg bg-primary text-white_light hover:bg-primary_dark"
        >
          약속 잡으러 가기
        </Link>
      </div>
    );
  }

  return (
    <>
      <ul className="flex flex-col gap-4">
        {initActivities.map((activity) => (
          <li key={activity.id}>
            <ReviewsCard
              activityId={activity.id}
              title={activity.title}
              startDate={activity.startDate}
              endDate={activity.endDate}
              userImg={activity.user.image!}
              nickname={activity.user.nickname}
              removeActivity={removeActivity}
            />
          </li>
        ))}
        <div ref={observer} />
      </ul>
      {isPending && (
        <div className="flex justify-center w-full">
          <ReviewCardSkeleton />
        </div>
      )}
    </>
  );
}
