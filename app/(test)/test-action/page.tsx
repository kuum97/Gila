import { getActivities } from '@/app/data/activity';
import CreateSampleActivityButton from './_components/create-sample-activity-button';
import Image from 'next/image';

export default async function Page() {
  const activitiesRes = await getActivities({ type: 'recent' });
  const activities = activitiesRes.activities;
  return (
    <div className="space-y-4">
      <CreateSampleActivityButton />
      <div className="space-y-2">
        {activities.map((activity) => (
          <div key={activity.id} className="bg-slate-300 p-2 rounded-md">
            <div>{activity.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
