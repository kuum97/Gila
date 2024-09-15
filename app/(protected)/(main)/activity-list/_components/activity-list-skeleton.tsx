import ActivityCardSkeleton from '@/components/skeletons/activity-card-skeleton';
import Skeleton from '@/components/ui/skeleton';

export default function ActivityListSkeleton() {
  return (
    <div className="h-full">
      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">길라 목록</h1>
          <Skeleton className="w-[80px] h-[30px] bg-gray-200" />
        </div>
        <ActivityCardSkeleton />
      </div>
    </div>
  );
}
