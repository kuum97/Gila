import PromiseRequestForm from '@/app/(protected)/(detail)/activity/[activityId]/_components/promise-request-form';
import { getActivityById } from '@/app/data/activity';
import DetailContent from '@/app/(protected)/(detail)/activity/[activityId]/_components/detail-content';
import { getCurrentUserId } from '@/app/data/user';

interface Params {
  activityId: string;
}

export default async function Page({ params }: { params: Params }) {
  const activity = await getActivityById(params.activityId);
  const currentUser = await getCurrentUserId();

  return (
    <div>
      <DetailContent detail={activity} />
      <PromiseRequestForm activity={activity} currentUser={currentUser} />
    </div>
  );
}
