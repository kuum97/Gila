import DetailContent from '@/app/(protected)/[activityId]/_components/detail-content';
import PromiseRequestForm from '@/app/(protected)/[activityId]/_components/promise-request-form';

interface Params {
  activityId: string;
}

export default async function Page({ params }: { params: Params }) {
  const id = Number(params.activityId);

  return (
    <div>
      <DetailContent />
      <PromiseRequestForm />
    </div>
  );
}
