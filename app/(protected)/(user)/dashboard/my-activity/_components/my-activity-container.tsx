import { getMyActivities } from '@/app/data/activity';
import MyActivityList from './my-activity-list';

export default async function MyActivityContainer() {
  const { activities, cursorId } = await getMyActivities({ take: 5 });

  return <MyActivityList myActivities={activities} activityCursorId={cursorId} />;
}
