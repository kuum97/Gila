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
      className="p-1 border rounded-full shadow-md bg-white_light hover:bg-slate-200"
    >
      <Undo2 />
    </button>
  );
}
