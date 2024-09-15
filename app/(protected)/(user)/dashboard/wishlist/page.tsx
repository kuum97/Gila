import { Suspense } from 'react';
import WishListContainer from './_components/wishList-container';
import WishListSkeleton from './_components/wishList-skeleton';

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
