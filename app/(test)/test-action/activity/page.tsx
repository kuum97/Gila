import { getActivities } from '@/app/data/activity';
import CreateSampleActivityButton from './_components/create-sample-activity-button';
import Link from 'next/link';

export default async function Page() {
  const activitiesRes = await getActivities({ type: 'recent' });
  const activities = activitiesRes.activities;

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        <CreateSampleActivityButton />
        <div className="flex flex-col gap-y-2">
          {activities.map((activity) => (
            <Link
              href={`/test-action/${activity.id}`}
              key={activity.id}
              className="bg-slate-300 p-2 rounded-md"
            >
              {activity.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
