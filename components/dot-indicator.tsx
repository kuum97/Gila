import React from 'react';

interface Props {
  total: number;
  current: number;
}

export default function DotIndicator({ total, current }: Props) {
  return (
    <div className="absolute flex items-center justify-center space-x-2 transform -translate-x-1/2 left-1/2 bottom-4">
      {Array.from({ length: total }).map((_, index) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className={`w-2 h-2 rounded-full ${index === current ? 'border bg-transparent' : 'bg-white'}`}
        />
      ))}
    </div>
  );
}
