import { Plus } from 'lucide-react';
import React from 'react';

interface Props {
  onClick?: () => void;
}

export default function PlusButton({ onClick }: Props) {
  return (
    <div className="fixed bottom-0 left-0 w-full p-2">
      <button
        type="button"
        className="w-full p-2 bg-primary flex justify-center rounded-md"
        aria-label="추가하기"
        onClick={onClick}
      >
        <Plus className="text-white" />
      </button>
    </div>
  );
}
