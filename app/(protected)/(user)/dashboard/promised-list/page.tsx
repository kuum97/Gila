import { getMyReceivedRequests } from '@/app/data/activity-request';
import PromisedList from '@/app/(protected)/(user)/dashboard/promised-list/_components/promised-list';
import { getCurrentUser } from '@/app/data/user';

export default async function Page() {
  const { requests, cursorId } = await getMyReceivedRequests({});
  const user = await getCurrentUser();

  return (
    <main className="p-5 flex flex-col gap-4">
      <h1 className="w-full text-2xl font-bold">
        <span className="text-3xl text-primary">{user.nickname}</span>님과 함께하고 싶대요!
      </h1>
      <PromisedList promisedActivities={requests} cursorId={cursorId} />
    </main>
  );
}
