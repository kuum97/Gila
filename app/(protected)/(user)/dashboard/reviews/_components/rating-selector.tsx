'use client';

import React from 'react';

interface Props {
  selectedRating: number;
  onRatingClick: (rating: number) => void;
}

const ratings = [
  { text: '별로에요', value: 0 },
  { text: '그저 그래요', value: 1 },
  { text: '보통이에요', value: 3 },
  { text: '좋아요', value: 5 },
  { text: '엄청 좋아요', value: 7 },
];

export default function RatingSelector({ selectedRating, onRatingClick }: Props) {
  return (
    <ul className="flex justify-between mt-2">
      {ratings.map((rating) => (
        <li key={rating.value}>
          <button
            type="button"
            className={`flex flex-col items-center text-xs ${
              selectedRating === rating.value ? 'text-primary' : 'text-gray-500'
            }`}
            onClick={() => onRatingClick(rating.value)}
          >
            <div className="w-4 h-4 rounded-full mb-1 flex justify-center items-center bg-gray-200">
              <div
                className={`w-[10px] h-[10px] rounded-full ${
                  selectedRating === rating.value ? 'bg-primary' : 'bg-none'
                }`}
              />
            </div>
            <span>{rating.text}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
