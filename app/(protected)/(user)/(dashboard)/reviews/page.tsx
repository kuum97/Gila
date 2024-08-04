import { getAvailableReviewActivities } from '@/app/data/activity';
import ReviewList from './_components/review-list';

export default async function Page() {
  const activitiesRes = await getAvailableReviewActivities({ take: 5 });
  const { activities, cursorId } = activitiesRes;

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-lg font-bold">이전 활동은 어땠나요?</h1>
      <ReviewList activities={activities} cursorId={cursorId} />
    </div>
  );
}
