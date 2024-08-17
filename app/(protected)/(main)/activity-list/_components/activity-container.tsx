import { ActivityWithUserAndFavoCount, Sort } from '@/type';
import ActivityList from '@/app/(protected)/(main)/activity-list/_components/activity-list';
import SortingDropdown from '@/components/sorting-dropdown';
import { ACTIVITYSORTS } from '@/constants/sort';

interface Props {
  activities: ActivityWithUserAndFavoCount[];
  cursorId: string | null;
  sort: Sort;
  location: string;
}

export default function ActivityContainer({ activities, cursorId, sort, location }: Props) {
  return (
    <section className="flex flex-col gap-2 p-4 pb-20 tall:pb-2">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">길라 목록</h1>
        <SortingDropdown sorts={ACTIVITYSORTS} />
      </div>
      <ActivityList activities={activities} cursorId={cursorId} sort={sort} location={location} />
    </section>
  );
}
