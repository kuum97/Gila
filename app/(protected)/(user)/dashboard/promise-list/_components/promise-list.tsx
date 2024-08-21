'use client';

import { RequestWithActivity } from '@/type';
import { useCallback, useEffect, useState, useTransition } from 'react';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { getMySentRequests } from '@/app/data/activity-request';
import PromiseListCard from '@/app/(protected)/(user)/dashboard/promise-list/_components/promise-list-card';
import Spinner from '@/components/ui/spinner';
import Link from 'next/link';
import Image from 'next/image';

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

  if (promiseList.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 font-semibold -translate-y-16 h-screen-minus-134">
        <Image src="/GrayLogo.svg" width={150} height={50} alt="회색 로고" />
        <div className="flex flex-col text-center gap-1">
          <p className="text-lg">아직 아무 길라와도 약속을 잡지 않으셨습니다.</p>
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
      <ul className="flex flex-col w-full gap-4 pb-20 tall:pb-0">
        {infinityPromise.map((item) => (
          <li key={item.id} className="relative">
            <PromiseListCard promise={item} />
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
