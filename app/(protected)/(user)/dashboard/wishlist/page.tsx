import WishListCard from '@/app/(protected)/(user)/dashboard/wishlist/_components/wishlist-card';

export default function Page() {
  return (
    <div className="flex flex-col gap-3">
      <div>내가 찜한 활동 리스트</div>
      <WishListCard />
      <WishListCard />
      <WishListCard />
      <WishListCard />
      <WishListCard />
    </div>
  );
}
