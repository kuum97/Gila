'use client';
import { format } from 'date-fns';
import { useState, useTransition } from 'react';

import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import ReviewsCard from '@/app/(protected)/(user)/(dashboard)/reviews/_components/reviews-card';

import { ActivityWithUser } from '@/type';
import { getAvailableReviewActivities } from '@/app/data/activity';

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

  return (
    <>
      {initActivities.map((activity) => (
        <ReviewsCard
          key={activity.id}
          activityId={activity.id}
          title={activity.title}
          startDate={format(activity.startDate, 'yyyy-MM-dd')}
          endDate={format(activity.endDate, 'yyyy-MM-dd')}
          userImg={activity.user.image!}
          nickname={activity.user.nickname}
          removeActivity={removeActivity}
        />
      ))}
      <div ref={observer} />
    </>
  );
}
