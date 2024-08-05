import { getActivities, getMyActivities } from '@/app/data/activity';
import Link from 'next/link';
import CreateSampleActivityButton from './_components/create-sample-activity-button';

const getSingle = async () => {
  const res = await getActivities({ type: 'recent' });
  return res.activities[0];
};

export default async function Page() {
  const activitiesRes = await getActivities({ type: 'mostFavorite', size: 5, location: '은평구' });
  const { activities } = activitiesRes;

  const myActivitiesRes = await getMyActivities({ take: 3 });
  const myActivities = myActivitiesRes.activities;

  const activity = await getSingle();

  return (
    <div className="space-y-4">
      <pre>{JSON.stringify(activity, null, 2)}</pre>
      <div className="space-y-4">
        <CreateSampleActivityButton />
        <div className="flex flex-col gap-y-2">
          {activities.map((item) => (
            <div key={item.id} className="grid grid-cols-2">
              <Link
                href={`/test-action/activity/${item.id}`}
                className="bg-slate-300 p-2 rounded-md"
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-y-2">
          {myActivities.map((item) => (
            <div key={item.id} className="grid grid-cols-2">
              <Link
                href={`/test-action/activity/${item.id}`}
                className="bg-slate-300 p-2 rounded-md"
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
