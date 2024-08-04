'use client';

import { createActivityRequest } from '@/app/action/activity-request';
import { Button } from '@/components/ui/button';
import { formatDateRange } from '@/utils/formatDateRange';
import { useTransition } from 'react';
import { toast } from 'sonner';

interface Props {
  startDate: Date;
  endDate: Date;
  maxCount: number;
  activityId: string;
}

export default function PromiseRequestForm({ startDate, endDate, maxCount, activityId }: Props) {
  const [isPending, startTransition] = useTransition();
  const formatDate = formatDateRange({ startDateString: startDate, endDateString: endDate });

  const applyActivity = () => {
    startTransition(async () => {
      const result = await createActivityRequest(activityId);
      toast.message(result.message);
    });
  };

  return (
    <div className="fixed bottom-0 w-full h-20 bg-[#1B1B1B] z-50 flex justify-between gap-8 items-center px-8 py-0">
      <div className="flex items-center justify-between w-full flex-col gap-2">
        <p className="text-xs text-white">{formatDate}</p>
        <p className="text-sm text-white">최대 인원 {maxCount}명</p>
      </div>
      <Button
        type="button"
        className="px-4 py-2 text-xs font-bold border border-none rounded-md bg-primary"
        onClick={applyActivity}
        disabled={isPending}
      >
        약속잡기
      </Button>
    </div>
  );
}
