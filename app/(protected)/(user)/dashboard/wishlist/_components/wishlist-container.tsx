import getMyFavorites from '@/app/data/favorite';
import WishList from './wishlist';

export default async function WishListContainer() {
  const { favorites, cursorId } = await getMyFavorites({ take: 10 });

  return <WishList initialFavorites={favorites} initialCursorId={cursorId} />;
}
