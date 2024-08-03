import { getMySentRequests } from '@/app/data/activity-request';
import PromiseList from './_components/promise-list';

export default async function Page() {
  const myPromise = await getMySentRequests({ take: 6 });

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-lg font-bold">내가 신청한 활동</h1>
      <PromiseList promiseList={myPromise.requests} />
    </div>
  );
}
