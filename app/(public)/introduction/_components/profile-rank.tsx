import Image from 'next/image';
import React from 'react';

interface Props {
  rating: number;
}

const getRank = (rating: number): string => {
  if (rating >= 80) return 'diamond';
  if (rating >= 60) return 'red';
  if (rating >= 40) return 'emerald';
  if (rating >= 20) return 'silver';
  return 'bronze';
};

export default function ProfileRank({ rating }: Props) {
  const rank = getRank(rating);

  return (
    <div className="w-20 h-20 relative">
      <Image src={`/rank/${rank}.svg`} alt={`${rank} rank`} fill />
    </div>
  );
}
