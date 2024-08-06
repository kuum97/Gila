'use client';

import { useRouter } from 'next/navigation';
import { Undo2 } from 'lucide-react';

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      type="button"
      aria-label="back-btn"
      onClick={handleBack}
      className="bg-[#ffffff] p-1 rounded-full shadow-md border hover:bg-slate-200"
    >
      <Undo2 />
    </button>
  );
}
