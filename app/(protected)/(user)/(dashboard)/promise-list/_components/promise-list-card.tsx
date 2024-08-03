import ImageCard from '@/components/image-card';
import SmallButton from '@/components/small-button';
import PromiseStatus from '@/app/(protected)/(user)/(dashboard)/promise-list/_components/promise-status';
import { RequestWithActivity } from '@/type';
import { format } from 'date-fns';

export default function PromiseListCard({ promise }: { promise: RequestWithActivity }) {
  const { activity } = promise;
  const start = format(activity.startDate, 'yyyy.MM.dd');
  const end = format(activity.endDate, 'yyyy.MM.dd');

  // 예시용
  return (
    <ImageCard
      activityId={activity.id}
      title={activity.title}
      date={`${start} ~ ${end}`}
      participants={activity.maximumCount}
      bottomContent={
        <div className="absolute right-3 bottom-3">
          {promise.status === 'PENDING' && <SmallButton color="bg-primary" name="취소" />}
        </div>
      }
      topContent={
        <div className="absolute top-1 right-1">
          <PromiseStatus status={promise.status} />
        </div>
      }
    />
  );
}
