import { ActivityWithUserAndFavoCount } from '@/type';
import ActivityList from '@/app/(protected)/(main)/activity-list/_components/activity-list';
import SortingDropdown from '@/app/(protected)/(main)/activity-list/_components/sorting-dropdown';

interface Props {
  activities: ActivityWithUserAndFavoCount[];
}

export default function ActivityContainer({ activities }: Props) {
  return (
    <section className="flex flex-col p-3 gap-2">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">길라 목록</h1>
        <SortingDropdown />
      </div>
      <ActivityList activities={activities} />
    </section>
  );
}
