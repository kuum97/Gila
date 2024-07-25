'use client';

import { createActivityRequest } from '@/app/action/activity-request';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { toast } from 'sonner';

type Props = {
  activityId: string;
};

export default function CreateSampleActivityRequestButton({ activityId }: Props) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const createSampleActivityRequest = () => {
    startTransition(async () => {
      const action = await createActivityRequest(activityId);
      if (!action.success) {
        toast.error(action.message);
        return;
      }
      toast.success(action.message);
      router.refresh();
    });
  };

  return (
    <Button onClick={createSampleActivityRequest} disabled={isPending}>
      요청 생성하기
    </Button>
  );
}
