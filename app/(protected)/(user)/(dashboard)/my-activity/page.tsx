import PlusButton from '@/app/(protected)/(user)/(dashboard)/_components/plus-button';
import { getMyActivities } from '@/app/data/activity';
import MyActivityList from '@/app/(protected)/(user)/(dashboard)/my-activity/_components/my-activity-list';

export default async function Page() {
  const myActivities = await getMyActivities({});
  return (
    <>
      <ul className="flex flex-col gap-3">
        <h1 className="text-lg font-bold">내가 등록한 활동</h1>
        <MyActivityList myActivities={myActivities.activities} />
      </ul>
      <div className="z-100">
        <PlusButton />
      </div>
    </>
  );
}
