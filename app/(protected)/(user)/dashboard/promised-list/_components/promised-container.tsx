import { getMyReceivedRequests } from '@/app/data/activity-request';
import PromisedList from './promised-list';

export default async function PromisedContainer() {
  const { requests, cursorId } = await getMyReceivedRequests({});

  return <PromisedList promisedActivities={requests} cursorId={cursorId} />;
}
