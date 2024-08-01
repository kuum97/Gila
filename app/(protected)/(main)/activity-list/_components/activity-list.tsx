import ActivityListCard from '@/app/(protected)/(main)/activity-list/_components/activity-list-card';
import { ActivityWithUserAndFavoCount } from '@/type';

interface Props {
  activities: ActivityWithUserAndFavoCount[];
}

export default function ActivityList({ activities }: Props) {
  return (
    <ul className="flex flex-col gap-2">
      {activities.map((activity) => (
        <li key={activity.id}>
          <ActivityListCard activity={activity} />
        </li>
      ))}
    </ul>
  );
}
