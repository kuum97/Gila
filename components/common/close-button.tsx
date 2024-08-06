'use client';

import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

export default function CloseButton({ className }: Props) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      type="button"
      aria-label="back-btn"
      onClick={handleBack}
      className={cn('bg-[#ffffff] p-1 rounded-full shadow-md border hover:bg-slate-200', className)}
    >
      <X />
    </button>
  );
}
