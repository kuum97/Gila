import { getMyReceivedRequests } from '@/app/data/activity-request';
import PromisedList from '@/app/(protected)/(user)/(dashboard)/promised-list/_components/promised-list';

export default async function Page() {
  const { requests, cursorId } = await getMyReceivedRequests({});

  return (
    <main className="flex flex-col min-h-screen gap-3">
      <h1 className="text-lg font-bold">내 활동 신청 현황</h1>
      <PromisedList promisedActivities={requests} cursorId={cursorId} />
    </main>
  );
}
