'use client';

import { createReview } from '@/app/action/review';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { toast } from 'sonner';

type Props = {
  activityId: string;
};

export default function CreateSampleReviewButton({ activityId }: Props) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const createSampleReview = () => {
    startTransition(async () => {
      const rating = Math.floor(Math.random() * (100 - 1 + 1));

      const action = await createReview({ activityId, rating });

      if (!action.success) {
        toast.error(action.message);
        return;
      }
      toast.success(action.message);
      router.refresh();
    });
  };

  return (
    <Button onClick={createSampleReview} disabled={isPending}>
      리뷰 생성하기
    </Button>
  );
}
