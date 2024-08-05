'use client';

import { approveActivityRequest, rejectActivityRequest } from '@/app/action/activity-request';
import ImageCard from '@/components/image-card';
import SmallButton from '@/components/small-button';
import UserIcon from '@/components/user-icon';
import { RequestWithReqUserAndActivity } from '@/type';
import formatDateRange from '@/utils/formatDateRange';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { toast } from 'sonner';

interface Props {
  promisedActivity: RequestWithReqUserAndActivity;
}

export default function PromisedListCard({ promisedActivity }: Props) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const { id, activity, activityId, requestUser } = promisedActivity;
  const { title, startDate, endDate, thumbnails } = activity;

  const approve = () => {
    startTransition(async () => {
      const action = await approveActivityRequest(id);
      if (!action.success) {
        toast.error(action.message);
        return;
      }
      toast.success(action.message);
      router.refresh();
    });
  };

  const reject = () => {
    startTransition(async () => {
      const action = await rejectActivityRequest(id);
      if (!action.success) {
        toast.error(action.message);
        return;
      }
      toast.success(action.message);
      router.refresh();
    });
  };

  return (
    <ImageCard
      title={title}
      date={formatDateRange({ startDateString: startDate, endDateString: endDate })}
      activityId={activityId}
      imageSrc={thumbnails[0]}
      bottomContent={
        <div className="flex items-center text-xs">
          <UserIcon imageSrc={requestUser.image || '/test.png'} name="sjae" />
          <div className="flex justify-end w-full gap-2">
            <SmallButton disabled={isPending} onClick={approve} color="bg-green" name="수락" />
            <SmallButton disabled={isPending} onClick={reject} color="bg-red" name="거절" />
          </div>
        </div>
      }
    />
  );
}
