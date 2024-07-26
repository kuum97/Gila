'use client';

import React from 'react';

interface Props {
  selectedRating: string;
  onRatingClick: (rating: string) => void;
}

export default function RatingSelector({ selectedRating, onRatingClick }: Props) {
  const ratings = ['별로에요', '그저 그래요', '보통이에요', '좋아요', '엄청 좋아요'];

  return (
    <div className="flex justify-between mt-2">
      {ratings.map((rating) => (
        <button
          type="button"
          key={rating}
          className={`flex flex-col items-center text-xs ${
            selectedRating === rating ? 'text-primary' : 'text-gray-500'
          }`}
          onClick={() => onRatingClick(rating)}
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
  );
}
