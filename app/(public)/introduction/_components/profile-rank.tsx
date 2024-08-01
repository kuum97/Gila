import Image from 'next/image';
import React from 'react';

interface Props {
  rating: number;
}

const ranks = [
  { threshold: 80, name: 'diamond' },
  { threshold: 60, name: 'red' },
  { threshold: 40, name: 'emerald' },
  { threshold: 20, name: 'silver' },
  { threshold: 0, name: 'bronze' },
];

const getRank = (rating: number) => {
  let rank = 'bronze';
  for (let i = 0; i < ranks.length; i += 1) {
    if (rating >= ranks[i].threshold) {
      rank = ranks[i].name;
      break;
    }
  }
  return rank;
};

export default function ProfileRank({ rating }: Props) {
  const userRank = getRank(rating);
  return (
    <div className="w-20 h-20 relative">
      <Image src={`/rank/${userRank}.svg`} alt={`${userRank} rank`} fill />
    </div>
  );
}
