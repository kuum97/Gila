import { ActivityWithUserAndFavoCount, Sort } from '@/type';
import ActivityList from '@/app/(protected)/(main)/activity-list/_components/activity-list';
import SortingDropdown from '@/app/(protected)/(main)/activity-list/_components/sorting-dropdown';

interface Props {
  activities: ActivityWithUserAndFavoCount[];
  cursorId: string | null;
  sort: Sort;
}

export default function ActivityContainer({ activities, cursorId, sort }: Props) {
  return (
    <section className="flex flex-col gap-2 p-3">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">길라 목록</h1>
        <SortingDropdown />
      </div>
      <ActivityList activities={activities} cursorId={cursorId} sort={sort} />
    </section>
  );
}
