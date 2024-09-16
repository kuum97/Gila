import { Suspense } from 'react';
import { auth } from '@/auth';
import WishListSkeleton from './_components/wishList-skeleton';
import WishListContainer from './_components/wishlist-container';

export default async function Page() {
  const user = await auth();

  return (
    <main className="p-5 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">
        <span className="text-3xl text-primary">{user?.user?.name}</span>님이 저장한 활동
      </h1>
      <Suspense fallback={<WishListSkeleton />}>
        <WishListContainer />
      </Suspense>
    </main>
  );
}
