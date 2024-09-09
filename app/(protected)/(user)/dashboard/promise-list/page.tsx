import { getMySentRequests } from '@/app/data/activity-request';
import PromiseList from '@/app/(protected)/(user)/dashboard/promise-list/_components/promise-list';
import { Suspense } from 'react';
import { getCurrentUser } from '@/app/data/user';
import MyActivityCardSkeleton from '@/components/skeletons/my-activity-card-skeleton';

export default async function Page() {
  const myPromise = await getMySentRequests({ take: 6 });
  const user = await getCurrentUser();

  return (
    <main className="p-5 flex flex-col gap-4">
      <h1 className="w-full text-2xl font-bold">
        <span className="text-3xl text-primary">{user.nickname}</span>님이 신청한 활동
        <p className="text-base font-medium">신청이 수락되면 참가자들과 소통할 수 있어요!</p>
      </h1>
      <Suspense fallback={<MyActivityCardSkeleton />}>
        <PromiseList promiseList={myPromise.validRequests} cursorId={myPromise.cursorId} />
      </Suspense>
    </main>
  );
}
