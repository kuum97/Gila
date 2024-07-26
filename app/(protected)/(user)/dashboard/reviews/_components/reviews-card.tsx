'use client';

import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function ReviewsCard() {
  const [selectedRating, setSelectedRating] = useState('');

  const ratings = ['별로에요', '그저 그래요', '보통이에요', '좋아요', '엄청 좋아요'];

  const handleRatingClick = (rating: string) => {
    if (selectedRating === rating) {
      setSelectedRating(''); // 동일한 값을 클릭하면 선택 해제
    } else {
      setSelectedRating(rating); // 새로운 값을 클릭하면 선택
    }
  };

  const handleSubmit = () => {
    // eslint-disable-next-line no-console
    console.log('Selected Rating:', selectedRating);
  };

  return (
    <div className="w-full border p-3 rounded-lg flex gap-6 relative">
      <div className="flex flex-col justify-center gap-2 w-full overflow-hidden">
        <h1 className="text-sm font-bold truncate w-full">함께 배우는 즐거운 스트릿 댄스</h1>
        <div className="text-xs flex flex-col gap-2">
          <div className="flex gap-4">
            <p>2024-07-19 ~ 2024-07-19</p>
            <p>16 : 00 ~ 18 : 00</p>
          </div>
          <div className="flex items-center gap-1">
            <Avatar className="w-5 h-5">
              <AvatarImage src="/test.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="font-bold flex-shrink-0">성재</span>
          </div>
        </div>
        <div className="flex justify-between mt-2">
          {ratings.map((rating) => (
            <button
              type="button"
              key={rating}
              className={`flex flex-col items-center text-xs ${
                selectedRating === rating ? 'text-primary' : 'text-gray-500'
              }`}
              onClick={() => handleRatingClick(rating)}
            >
              <div className="w-4 h-4 rounded-full mb-1 flex justify-center items-center bg-gray-200">
                <div
                  className={`w-[10px] h-[10px] rounded-full ${
                    selectedRating === rating ? 'bg-primary' : 'bg-none'
                  }`}
                />
              </div>
              <span>{rating}</span>
            </button>
          ))}
        </div>
      </div>
      <button
        type="button"
        className="text-white text-xs rounded-md bg-primary px-2 py-1 absolute right-3"
        onClick={handleSubmit}
      >
        제출
      </button>
    </div>
  );
}
