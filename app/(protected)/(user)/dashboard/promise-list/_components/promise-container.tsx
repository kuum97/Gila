import { getMySentRequests } from '@/app/data/activity-request';
import PromiseList from './promise-list';

export default async function PromiseContainer() {
  const myPromise = await getMySentRequests({ take: 6 });

  return <PromiseList promiseList={myPromise.validRequests} cursorId={myPromise.cursorId} />;
}
