import getMyFavorites from '@/app/data/favorite';
import WishListContainer from '@/app/(protected)/(user)/dashboard/wishlist/_components/wishlist-container';

export default async function Page() {
  const { favorites, cursorId } = await getMyFavorites({ take: 10 });

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-lg font-bold">찜 목록</h1>
      <WishListContainer initialFavorites={favorites} initialCursorId={cursorId} />
    </div>
  );
}
