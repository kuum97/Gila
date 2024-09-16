import { Suspense } from 'react';
import ReviewContainer from './_components/review-container';
import ReviewSkeleton from './_components/review-skeleton';

export default async function Page() {
  return (
    <main className="flex flex-col gap-4 p-5">
      <h1 className="text-2xl font-bold">이전 활동은 어땠나요?</h1>
      <Suspense fallback={<ReviewSkeleton />}>
        <ReviewContainer />
      </Suspense>
    </main>
  );
}
