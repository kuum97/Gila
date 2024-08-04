import { Plus } from 'lucide-react';
import React from 'react';

export default function PlusButton() {
  return (
    <button
      type="button"
      className="absolute flex justify-center p-2 rounded-full top-3 right-5 size-10 bg-primary"
      aria-label="추가하기"
    >
      <Plus className="text-white" />
    </button>
  );
}
