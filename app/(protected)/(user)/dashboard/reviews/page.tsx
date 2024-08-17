import { getAvailableReviewActivities } from '@/app/data/activity';
import ReviewList from '@/app/(protected)/(user)/dashboard/reviews/_components/review-list';

export default async function Page() {
  const activitiesRes = await getAvailableReviewActivities({ take: 5 });
  const { activities, cursorId } = activitiesRes;

  return (
    <main className="flex flex-col gap-4 p-5 min-h-[calc(100vh-64px-86px)] tall:pb-0 pb-20">
      <h1 className="text-2xl font-bold">이전 활동은 어땠나요?</h1>
      <ReviewList activities={activities} cursorId={cursorId} />
    </main>
  );
}
