import PromisedCardSkeleton from '@/components/skeletons/promised-card-skeleton';

export default function PromisedSkeleton() {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <PromisedCardSkeleton />
      <PromisedCardSkeleton />
      <PromisedCardSkeleton />
      <PromisedCardSkeleton />
      <PromisedCardSkeleton />
    </div>
  );
}
