'use client';

import ActivityListCard from '@/app/(protected)/(main)/activity-list/_components/activity-list-card';
import { getActivities } from '@/app/data/activity';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { ActivityWithUserAndFavoCount, Sort } from '@/type';
import { useCallback, useEffect, useState, useTransition } from 'react';
import Spinner from '@/components/ui/spinner';

interface Props {
  activities: ActivityWithUserAndFavoCount[];
  cursorId: string | null;
  sort: Sort;
}

export default function ActivityList({ activities, cursorId, sort }: Props) {
  const [infinityActivities, setInfinityActivities] = useState<ActivityWithUserAndFavoCount[]>([]);
  const [infinityCursorId, setInfinityCursorId] = useState<string | null>(cursorId);
  const [isPending, startTransition] = useTransition();

  const loadMoreActivities = useCallback(async () => {
    startTransition(async () => {
      if (!infinityCursorId) return;
      const result = await getActivities({
        type: sort,
        cursor: infinityCursorId,
      });
      setInfinityCursorId(result.cursorId);
      setInfinityActivities((prev) => [...prev, ...result.activities]);
    });
  }, [infinityCursorId, sort]);

  const observer = useInfiniteScroll({
    callback: loadMoreActivities,
    isLoading: isPending,
    cursorId: infinityCursorId,
  });

  useEffect(() => {
    setInfinityActivities([...activities]);
    setInfinityCursorId(cursorId);
  }, [activities, cursorId, sort]);

  return (
    <div className="flex flex-col ">
      <ul className="flex flex-col gap-2">
        {infinityActivities.map((activity) => (
          <li key={activity.id}>
            <ActivityListCard activity={activity} />
          </li>
        ))}
        <div ref={observer} />
      </ul>
      {isPending && <Spinner />}
    </div>
  );
}
