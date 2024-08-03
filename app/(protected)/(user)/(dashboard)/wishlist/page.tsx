import WishListCard from '@/app/(protected)/(user)/dashboard/wishlist/_components/wishlist-card';
import { getMyFavorites } from '@/app/data/favorite';
import { getCurrentUser, getCurrentUserProfile } from '@/app/data/user';

export default async function Page() {
  const { favorites, cursorId } = await getMyFavorites({ take: 10 });

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-lg font-bold">찜 목록</h1>
      <WishListCard testList={favorites} cursorId={cursorId} user={user} />
    </div>
  );
}
