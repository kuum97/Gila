import WishListCard from '@/app/(protected)/(user)/(dashboard)/wishlist/_components/wishlist-card';

export default function Page() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-lg font-bold">찜 목록</h1>
      <WishListCard />
      <WishListCard />
      <WishListCard />
      <WishListCard />
      <WishListCard />
    </div>
  );
}
