import React from 'react';

interface Props {
  color: string;
  name: string;
  onClick?: () => void;
}

export default function SmallButton({ color, name, onClick }: Props) {
  return (
    <button
      type="button"
      className={`text-xs text-white rounded-md ${color} px-2 py-1`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
