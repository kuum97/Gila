'use client';

import ImageCard from '@/components/image-card';
import PromiseStatus from '@/app/(protected)/(user)/(dashboard)/promise-list/_components/promise-status';
import { RequestWithActivity } from '@/type';
import { deleteActivityRequest } from '@/app/action/activity-request';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { formatDateRange } from '@/utils/formatDateRange';
import DeleteAlertModal from '@/components/delete-alert-modal';

export default function PromiseListCard({ promise }: { promise: RequestWithActivity }) {
  const router = useRouter();
  const { activity } = promise;
  const formatDate = formatDateRange({
    startDateString: activity.startDate,
    endDateString: activity.endDate,
  });

  const cancelPromise = async () => {
    const result = await deleteActivityRequest(promise.id);
    toast.message(result.message);
    router.refresh();
  };

  return (
    <ImageCard
      activityId={activity.id}
      title={activity.title}
      date={formatDate}
      participants={activity.maximumCount}
      bottomContent={
        <div className="absolute right-3 bottom-3 z-10">
          {promise.status === 'PENDING' && (
            <div onClick={(e) => e.preventDefault()}>
              <DeleteAlertModal deleteAction={cancelPromise} isButton content="취소" />
            </div>
          )}
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
