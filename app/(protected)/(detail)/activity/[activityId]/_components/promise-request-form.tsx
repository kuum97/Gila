'use client';

import { createActivityRequest } from '@/app/action/activity-request';
import { requestMail } from '@/app/action/mail';
import { Button } from '@/components/ui/button';
import { ActivityWithUserAndFavorite } from '@/type';
import formatDateRange from '@/utils/formatDateRange';
import { useTransition } from 'react';
import { toast } from 'sonner';

export default function PromiseRequestForm({
  activity,
}: {
  activity: ActivityWithUserAndFavorite;
}) {
  const { startDate, endDate, id, maximumCount } = activity;
  const [isPending, startTransition] = useTransition();
  const formatDate = formatDateRange({ startDateString: startDate, endDateString: endDate });
  const nowDate = new Date();
  const activityStatus = endDate < nowDate;

  const applyActivity = () => {
    startTransition(async () => {
      const result = await createActivityRequest(id);
      toast.message(result.message);
      if (result.success) {
        const request = await requestMail(activity);
        toast.message(request.message);
      }
    });
  };

  return (
    <div className="tall:sticky fixed inset-x-0 bottom-0 w-full tall:max-w-[420px] h-20 bg-[#1B1B1B] z-50 flex justify-between gap-8 items-center px-8 py-0">
      <div className="flex flex-col items-center justify-between w-full gap-2">
        <p className="text-sm text-white">최대 인원 {maximumCount}명</p>
        <p className="text-xs text-white">{formatDate}</p>
      </div>
      <Button
        type="button"
        className="px-4 py-2 text-sm font-semibold text-white border border-none rounded-md bg-primary hover:bg-primary_dark"
        onClick={applyActivity}
        disabled={isPending || activityStatus}
      >
        약속잡기
      </Button>
    </div>
  );
}
