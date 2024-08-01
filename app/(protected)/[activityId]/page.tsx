import PromiseRequestForm from '@/app/(protected)/[activityId]/_components/promise-request-form';
import { getActivityById } from '@/app/data/activity';
import DetailContent from '@/app/(protected)/[activityId]/_components/detail-content';

interface Params {
  activityId: string;
}

export default async function Page({ params }: { params: Params }) {
  const activity = await getActivityById(params.activityId);

  return (
    <>
      <DetailContent detail={activity} />
      <PromiseRequestForm />
    </>
  );
}
