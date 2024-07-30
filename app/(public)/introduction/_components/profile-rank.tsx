import Image from 'next/image';
import React from 'react';

interface Props {
  rating: number;
}

export default function ProfileRank({ rating }: Props) {
  let rank = '';

  if (rating >= 80) {
    rank = 'diamond';
  } else if (rating >= 60) {
    rank = 'red';
  } else if (rating >= 40) {
    rank = 'orange';
  } else if (rating >= 20) {
    rank = 'gold';
  } else {
    rank = 'silver';
  }

  return (
    <div className="w-20 h-20 relative">
      <Image src={`/rank/${rank}.svg`} alt="랭크 이미지" fill />
    </div>
  );
}
