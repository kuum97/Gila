import { Plus } from 'lucide-react';
import React from 'react';

export default function PlusButton() {
  return (
    <button
      type="button"
      className="flex justify-center w-full p-2 rounded-full bottom-2 bg-primary"
      aria-label="추가하기"
    >
      <Plus className="text-white" />
    </button>
  );
}
