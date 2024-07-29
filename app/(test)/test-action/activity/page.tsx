import { getActivities, getMyActivities } from '@/app/data/activity';
import CreateSampleActivityButton from './_components/create-sample-activity-button';
import Link from 'next/link';

const getSingle = async () => {
  const res = await getActivities({ type: 'recent' });
  return res.activities[0];
};

export default async function Page() {
  const activitiesRes = await getActivities({ type: 'mostFavorite', size: 5, location: '은평구' });
  const activities = activitiesRes.activities;

  const myActivitiesRes = await getMyActivities({ take: 3 });
  const myActivities = myActivitiesRes.activities;

  const activity = await getSingle();

  return (
    <div className="space-y-4">
      <pre>{JSON.stringify(activity, null, 2)}</pre>
      <div className="space-y-4">
        <CreateSampleActivityButton />
        <div className="flex flex-col gap-y-2">
          {activities.map((activity) => (
            <div key={activity.id} className="grid grid-cols-2">
              <Link
                href={`/test-action/activity/${activity.id}`}
                className="bg-slate-300 p-2 rounded-md"
              >
                {activity.title}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-y-2">
          {myActivities.map((activity) => (
            <div key={activity.id} className="grid grid-cols-2">
              <Link
                href={`/test-action/activity/${activity.id}`}
                className="bg-slate-300 p-2 rounded-md"
              >
                {activity.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
