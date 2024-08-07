'use client';

import ImageCard from '@/components/image-card';
import PromiseStatus from '@/app/(protected)/(user)/dashboard/promise-list/_components/promise-status';
import { RequestWithActivity } from '@/type';
import { deleteActivityRequest } from '@/app/action/activity-request';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import formatDateRange from '@/utils/formatDateRange';
import DeleteAlertModal from '@/components/delete-alert-modal';

export default function PromiseListCard({ promise }: { promise: RequestWithActivity }) {
  const router = useRouter();
  const { activity } = promise;
  const { id, title, startDate, endDate, maximumCount, thumbnails } = activity;
  const formatDate = formatDateRange({
    startDateString: startDate,
    endDateString: endDate,
  });

  const cancelPromise = async () => {
    const result = await deleteActivityRequest(promise.id);
    toast.message(result.message);
    router.refresh();
  };

  return (
    <ImageCard
      activityId={id}
      title={title}
      imageSrc={thumbnails[0]}
      middleContent={
        <>
          <p className="text-sm font-semibold text-gray-900">{formatDate}</p>
          <div className="text-sm font-semibold text-gray-900">
            <p>최대 인원: {maximumCount} 명</p>
          </div>
        </>
      }
      bottomContent={
        <div className="absolute top-3 right-3 flex flex-col gap-3">
          <div className="w-full flex justify-end">
            <PromiseStatus status={promise.status} />
          </div>
          {promise.status === 'PENDING' && (
            <div className="w-full" onClick={(e) => e.preventDefault()}>
              <DeleteAlertModal deleteAction={cancelPromise} isButton content="취소" />
            </div>
          )}
        </div>
      }
    />
  );
}
