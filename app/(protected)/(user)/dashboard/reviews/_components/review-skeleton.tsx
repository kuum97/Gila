import ReviewCardSkeleton from '@/components/skeletons/review-card-skeleton';

export default function ReviewSkeleton() {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <ReviewCardSkeleton />
      <ReviewCardSkeleton />
      <ReviewCardSkeleton />
      <ReviewCardSkeleton />
      <ReviewCardSkeleton />
    </div>
  );
}
