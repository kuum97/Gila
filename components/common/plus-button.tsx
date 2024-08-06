import { Plus } from 'lucide-react';
import React from 'react';

export default function PlusButton() {
  return (
    <button
      type="button"
      className="flex justify-center w-full p-1 rounded-full shadow-md bg-primary hover:bg-primary_dark"
      aria-label="plus-button"
    >
      <Plus className="text-white" />
    </button>
  );
}
