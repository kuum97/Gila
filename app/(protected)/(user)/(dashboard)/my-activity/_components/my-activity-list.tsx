'use client';

import { Activity } from '@prisma/client';
import React, { useCallback, useEffect, useState, useTransition } from 'react';
import MyActivityCard from '@/app/(protected)/(user)/(dashboard)/my-activity/_components/my-activity-card';
import { getMyActivities } from '@/app/data/activity';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import Spinner from '@/components/ui/spinner';

interface Props {
  myActivities: Activity[];
  activityCursorId: string | null;
}

export default function MyActivityList({ myActivities, activityCursorId }: Props) {
  const [activityList, setActivityList] = useState<Activity[]>([]);
  const [cursorId, setCursorId] = useState(activityCursorId);
  const [isPending, startTransition] = useTransition();

  const loadMoreActivities = useCallback(async () => {
    startTransition(async () => {
      if (!cursorId) return;
      const result = await getMyActivities({ take: 7, cursor: cursorId });
      setActivityList((prev) => [...prev, ...result.activities]);
      setCursorId(result.cursorId);
    });
  }, [cursorId]);

  useEffect(() => {
    setActivityList([...myActivities]);
    setCursorId(activityCursorId);
  }, [myActivities, activityCursorId]);

  const observer = useInfiniteScroll({
    callback: loadMoreActivities,
    cursorId,
    isLoading: isPending,
  });

  return (
    <div className="flex flex-col items-center">
      <ul className="flex flex-col gap-3 w-full">
        {activityList.map((myActivity) => (
          <li key={myActivity.id}>
            <MyActivityCard
              title={myActivity.title}
              views={myActivity.views}
              maximumCount={myActivity.maximumCount}
              startDate={myActivity.startDate}
              endDate={myActivity.endDate}
            />
          </li>
        ))}
        <div ref={observer} />
      </ul>
      {isPending && <Spinner />}
    </div>
  );
}
