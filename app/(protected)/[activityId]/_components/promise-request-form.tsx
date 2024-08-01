'use client';

import { Button } from '@/components/ui/button';
import { useTransition } from 'react';

interface Props {
  startDate: Date;
  endDate: Date;
  maxCount: number;
}

export default function PromiseRequestForm({ startDate, endDate, maxCount }: Props) {
  const [isPending, startTransition] = useTransition();

  const applyActivity = () => {
    startTransition(async () => {
      console.log('테스트입니다.');
    });
  };

  return (
    <div className="fixed bottom-0 w-full h-20 bg-[#1B1B1B] z-50 flex justify-between gap-8 items-center px-8 py-0">
      <div className="flex items-center justify-between w-full">
        <p className="text-xs text-white">2024.07.19 - 2024.07.19</p>
        <p className="text-xs text-white">최대 인원 {maxCount}명</p>
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
