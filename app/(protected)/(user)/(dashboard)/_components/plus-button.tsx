import { Plus } from 'lucide-react';
import React from 'react';

export default function PlusButton() {
  return (
    <div className="fixed bottom-0 left-0 w-full p-2 z-50">
      <button
        type="button"
        className="w-full p-2 bg-primary flex justify-center rounded-md"
        aria-label="추가하기"
      >
        <Plus className="text-white" />
      </button>
    </div>
  );
}
