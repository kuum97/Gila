import PromiseRequestForm from '@/app/(protected)/(detail)/activity/[activityId]/_components/promise-request-form';
import { getActivityById } from '@/app/data/activity';
import DetailContent from '@/app/(protected)/(detail)/activity/[activityId]/_components/detail-content';

interface Params {
  activityId: string;
}

export default async function Page({ params }: { params: Params }) {
  const activity = await getActivityById(params.activityId);

  return (
    <div>
      <DetailContent detail={activity} />
      <PromiseRequestForm activity={activity} />
    </div>
  );
}
