import { Suspense } from 'react';
import WishListSkeleton from './_components/wishList-skeleton';
import WishListContainer from './_components/wishlist-container';

export default async function Page() {
  return (
    <main className="p-5 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">저장한 활동</h1>
      <Suspense fallback={<WishListSkeleton />}>
        <WishListContainer />
      </Suspense>
    </main>
  );
}
