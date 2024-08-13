import { getMySentRequests } from '@/app/data/activity-request';
import PromiseList from '@/app/(protected)/(user)/dashboard/promise-list/_components/promise-list';
import { Suspense } from 'react';
import Loading from '@/app/(protected)/(user)/dashboard/loading';
import { getCurrentUser } from '@/app/data/user';

export default async function Page() {
  const myPromise = await getMySentRequests({ take: 6 });
  const user = await getCurrentUser();

  return (
    <main className="p-5 pb-20">
      <h1 className="w-full text-2xl font-bold">
        <span className="text-3xl text-primary">{user.nickname}</span>님이 신청한 활동
      </h1>
      <Suspense fallback={<Loading />}>
        <PromiseList promiseList={myPromise.requests} cursorId={myPromise.cursorId} />
      </Suspense>
    </main>
  );
}
