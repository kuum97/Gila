'use client';

import { useRouter } from 'next/navigation';
import { Undo2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

export default function BackButton({ className }: Props) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      type="button"
      aria-label="back-btn"
      onClick={handleBack}
      className={cn(
        'bg-white_light p-1 rounded-full shadow-md border hover:bg-slate-200',
        className,
      )}
    >
      <Undo2 />
    </button>
  );
}
