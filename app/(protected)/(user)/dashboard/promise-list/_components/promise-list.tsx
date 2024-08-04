'use client';

import { RequestWithActivity } from '@/type';
import { useCallback, useEffect, useState, useTransition } from 'react';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { getMySentRequests } from '@/app/data/activity-request';
import Spinner from '@/components/ui/spinner';
import PromiseListCard from './promise-list-card';

interface Props {
  promiseList: RequestWithActivity[];
  cursorId: string | null;
}

export default function PromiseList({ promiseList, cursorId }: Props) {
  const [infinityPromise, setInfinityPromise] = useState<RequestWithActivity[]>([]);
  const [infinityCursorId, setInfinityCursorId] = useState<string | null>(cursorId);
  const [isPending, startTransition] = useTransition();

  const loadMoreActivities = useCallback(async () => {
    startTransition(async () => {
      if (!infinityCursorId) return;
      const result = await getMySentRequests({
        take: 3,
        cursor: infinityCursorId,
      });
      setInfinityCursorId(result.cursorId);
      setInfinityPromise((prev) => [...prev, ...result.requests]);
    });
  }, [infinityCursorId]);

  const observer = useInfiniteScroll({
    callback: loadMoreActivities,
    isLoading: isPending,
    cursorId: infinityCursorId,
  });

  useEffect(() => {
    setInfinityPromise([...promiseList]);
    setInfinityCursorId(cursorId);
  }, [cursorId, promiseList]);

  return (
    <div className="flex flex-col items-center w-full">
      <ul className="flex flex-col gap-2 overflow-y-scroll h-[690px] w-full">
        {infinityPromise.map((item) => (
          <li key={item.id}>
            <PromiseListCard promise={item} />
          </li>
        ))}
        <div ref={observer} />
      </ul>
      {isPending && <Spinner />}
    </div>
  );
}
