'use client';

import { approveActivityRequest, rejectActivityRequest } from '@/app/action/activity-request';
// import ImageCard from '@/components/image-card';
import SmallButton from '@/components/small-button';
// import UserIcon from '@/components/user-icon';
import { cn } from '@/lib/utils';
import { RequestWithReqUser } from '@/type';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { toast } from 'sonner';

interface Props {
  activity: RequestWithReqUser;
}

export default function PromisedListCard({ activity }: Props) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const { id, status } = activity;

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
    <div
      className={cn(
        'flex justify-end w-full gap-2 bg-opacity-30',
        status === 'REJECT' ? 'bg-red' : 'bg-green',
      )}
    >
      <SmallButton disabled={isPending} onClick={approve} color="bg-green" name="수락" />
      <SmallButton disabled={isPending} onClick={reject} color="bg-red" name="거절" />
    </div>
    // <ImageCard
    //   title="함께 배우는 즐거운 스트릿 댄스"
    //   date="2024-07-19 ~ 2024-07-19"
    //   activityId={activityId}
    //   bottomContent={
    //     <div className="flex items-center text-xs">
    //       <UserIcon imageSrc="/test.png" name="sjae" />
    //       <div className="flex justify-end w-full gap-2">
    //         <SmallButton disabled={isPending} onClick={approve} color="bg-green" name="수락" />
    //         <SmallButton disabled={isPending} onClick={reject} color="bg-red" name="거절" />
    //       </div>
    //     </div>
    //   }
    // />
  );
}
