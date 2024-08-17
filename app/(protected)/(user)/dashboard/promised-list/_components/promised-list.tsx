'use client';

import { RequestWithReqUserAndActivity } from '@/type';
import PromisedListCard from '@/app/(protected)/(user)/dashboard/promised-list/_components/promised-list-card';
import { useCallback, useEffect, useState, useTransition } from 'react';
import { getMyReceivedRequests } from '@/app/data/activity-request';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import Spinner from '@/components/ui/spinner';

interface Props {
  promisedActivities: RequestWithReqUserAndActivity[];
  cursorId: string | null;
}

export default function PromisedList({ promisedActivities, cursorId }: Props) {
  const [infinityPromisedActivities, setInfinityPromisedActivities] = useState<
    RequestWithReqUserAndActivity[]
  >([]);
  const [infinityCursorId, setInfinityCursorId] = useState(cursorId);
  const [isPending, startTransition] = useTransition();

  const loadMorePromisedActivities = useCallback(async () => {
    startTransition(async () => {
      if (!infinityCursorId) return;
      const result = await getMyReceivedRequests({
        take: 10,
        cursor: infinityCursorId,
      });
      setInfinityCursorId(result.cursorId);
      setInfinityPromisedActivities((prev) => [...result.requests, ...prev]);
    });
  }, [infinityCursorId]);

  useEffect(() => {
    setInfinityPromisedActivities([...promisedActivities]);
  }, [promisedActivities]);

  const observer = useInfiniteScroll({
    callback: loadMorePromisedActivities,
    cursorId: infinityCursorId,
    isLoading: isPending,
  });

  if (promisedActivities.length === 0) {
    return (
      <div className="flex items-center justify-center font-semibold -translate-y-16 h-screen-minus-134">
        아직 약속을 신청한 분이 없습니다.
      </div>
    );
  }

  return (
    <>
      <ul className="flex flex-col w-full gap-4 pb-20 tall:pb-0">
        {infinityPromisedActivities.map((activity) => (
          <li key={activity.id}>
            <PromisedListCard promisedActivity={activity} />
          </li>
        ))}
        <div ref={observer} />
      </ul>
      {isPending && (
        <div className="flex justify-center w-full">
          <Spinner />
        </div>
      )}
    </>
  );
}
