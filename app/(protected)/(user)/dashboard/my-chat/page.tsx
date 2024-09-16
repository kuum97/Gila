import { Suspense } from 'react';
import { auth } from '@/auth';
import ChatContainer from './_components/chat-container';
import WishListSkeleton from '../wishlist/_components/wishList-skeleton';

export default async function Page() {
  const user = await auth();

  return (
    <main className="p-5">
      <div className="flex items-center justify-between w-full pb-5">
        <div>
          <h1 className="text-2xl font-bold">
            <span className="text-3xl text-primary">{user?.user?.name}</span>님이 등록한 채팅
          </h1>
          <p className="text-base font-medium">등록한 활동의 참가자들과 소통해보세요!</p>
        </div>
      </div>
      <Suspense fallback={<WishListSkeleton />}>
        <ChatContainer />
      </Suspense>
    </main>
  );
}
