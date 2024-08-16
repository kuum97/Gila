import { Suspense } from 'react';
import getMyFavorites from '@/app/data/favorite';
import WishListContainer from '@/app/(protected)/(user)/dashboard/wishlist/_components/wishlist-container';
import Loading from '@/app/(protected)/(user)/dashboard/loading';

export default async function Page() {
  const { favorites, cursorId } = await getMyFavorites({ take: 10 });

  return (
    <main className="p-5 min-h-[calc(100vh-64px-86px)] flex flex-col gap-4">
      <h1 className="text-2xl font-bold">저장한 활동</h1>
      <Suspense fallback={<Loading />}>
        <WishListContainer initialFavorites={favorites} initialCursorId={cursorId} />
      </Suspense>
    </main>
  );
}
