import { getAvailableReviewActivities } from '@/app/data/activity';
import ReviewList from './review-list';

export default async function ReviewContainer() {
  const { activities, cursorId } = await getAvailableReviewActivities({ take: 5 });

  return <ReviewList activities={activities} cursorId={cursorId} />;
}
