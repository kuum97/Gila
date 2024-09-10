import { Suspense } from 'react';
import { getAvailableReviewActivities } from '@/app/data/activity';
import ReviewList from '@/app/(protected)/(user)/dashboard/reviews/_components/review-list';
import ReviewCardSkeleton from '@/components/skeletons/review-card-skeleton';

export default async function Page() {
  const activitiesRes = await getAvailableReviewActivities({ take: 5 });
  const { activities, cursorId } = activitiesRes;

  return (
    <main className="flex flex-col gap-4 p-5">
      <h1 className="text-2xl font-bold">이전 활동은 어땠나요?</h1>
      <Suspense fallback={<ReviewCardSkeleton />}>
        <ReviewList activities={activities} cursorId={cursorId} />
      </Suspense>
    </main>
  );
}
