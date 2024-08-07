import ActivityCardSkeleton from '@/components/skeletons/activity-card-skeleton';
import CarouselCardSkeleton from '@/components/skeletons/carousel-card-skeleton';
import Skeleton from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="w-screen h-screen">
      <div className="pb-8 bg-white shadow-inner border-y-2">
        <h1 className="px-4 pt-4 text-xl font-semibold">현재 주목받는 길라들</h1>
        <CarouselCardSkeleton />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center justify-between py-1">
          <h1 className="text-xl font-semibold">길라 목록</h1>
          <Skeleton className="w-[80px] h-[30px] bg-gray-200" />
        </div>
        <ActivityCardSkeleton />
        <ActivityCardSkeleton />
      </div>
    </div>
  );
}
