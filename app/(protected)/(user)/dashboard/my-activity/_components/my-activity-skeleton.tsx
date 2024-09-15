import ActivityCardSkeleton from '@/components/skeletons/activity-card-skeleton';

export default function MyActivitySkeleton() {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <ActivityCardSkeleton />
      <ActivityCardSkeleton />
      <ActivityCardSkeleton />
    </div>
  );
}
