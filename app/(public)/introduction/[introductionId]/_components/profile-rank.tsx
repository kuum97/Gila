import Image from 'next/image';
import React from 'react';

interface Props {
  rating: number;
  score?: 'style1' | 'style2';
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

const styles = {
  style1: 'w-10 h-10',
  style2: 'w-20 h-20',
};

export default function ProfileRank({ rating, score }: Props) {
  const userRank = getRank(rating);
  const styleClass = score ? styles[score] : '';

  return (
    <div className={`${styleClass} relative`}>
      <Image src={`/rank/${userRank}.svg`} alt={`${userRank} rank`} fill />
    </div>
  );
}
