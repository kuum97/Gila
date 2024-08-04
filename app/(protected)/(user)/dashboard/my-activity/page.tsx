import { getMyActivities } from '@/app/data/activity';
import MyActivityList from '@/app/(protected)/(user)/dashboard/my-activity/_components/my-activity-list';
import ActivityCreateModal from './_components/activity-create-modal';

export default async function Page() {
  const myActivities = await getMyActivities({ take: 7 });
  return (
    <main className="min-h-screen">
      <h1 className="mb-3 text-lg font-bold">내가 등록한 활동</h1>
      <MyActivityList
        myActivities={myActivities.activities}
        activityCursorId={myActivities.cursorId}
      />
      <ActivityCreateModal />
    </main>
  );
}
