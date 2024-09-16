import WishCardSkeleton from '@/components/skeletons/wish-card-skeleton';

export default function WishListSkeleton() {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <WishCardSkeleton />
      <WishCardSkeleton />
      <WishCardSkeleton />
      <WishCardSkeleton />
      <WishCardSkeleton />
    </div>
  );
}
