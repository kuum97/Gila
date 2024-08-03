'use client';

/* eslint-disable no-console */

import React, { useState } from 'react';
import UserIcon from '@/components/user-icon';
import SmallButton from '@/components/small-button';
import RatingSelector from '@/app/(protected)/(user)/(dashboard)/reviews/_components/rating-selector';

export default function ReviewsCard() {
  const [selectedRating, setSelectedRating] = useState<number>(-1);

  const handleRatingClick = (rating: number) => {
    if (selectedRating === rating) {
      setSelectedRating(-1); // 동일한 값을 클릭하면 선택 해제
    } else {
      setSelectedRating(rating); // 새로운 값을 클릭하면 선택
    }
  };

  // 리뷰 제출 테스트
  const handleSubmit = () => {
    if (selectedRating === -1) {
      console.log('리뷰를 눌러주세요!');
      return;
    }
    console.log(`rating: ${selectedRating}`);
  };

  return (
    <div className="w-full border p-3 rounded-lg flex gap-6 relative">
      <div className="flex flex-col justify-center gap-2 w-full overflow-hidden">
        <h1 className="text-sm font-bold truncate w-full">함께 배우는 즐거운 스트릿 댄스</h1>
        <div className="text-xs flex flex-col gap-2">
          <div className="flex gap-3">
            <p>2024-07-19 ~ 2024-07-19</p>•<p>16 : 00 ~ 18 : 00</p>
          </div>
          <UserIcon name="바보" />
        </div>
        <RatingSelector selectedRating={selectedRating} onRatingClick={handleRatingClick} />
      </div>
      <div className="absolute top-3 right-3">
        <SmallButton name="제출" color="bg-primary" onClick={handleSubmit} />
      </div>
    </div>
  );
}
