import DetailContent from '@/app/(protected)/[activityId]/_components/detail-content';
import BottomNav from '@/app/(protected)/[activityId]/_components/bottom-nav';

interface Props {
  params: { activityId: number };
}

export default async function Page({ params }: Props) {
  const id = Number(params.activityId);

  return (
    <div>
      <DetailContent />
      <BottomNav />
    </div>
  );
}
