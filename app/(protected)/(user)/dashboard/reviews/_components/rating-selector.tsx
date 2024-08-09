'use client';

import React from 'react';
import RATINGS from '@/constants/ratings';

interface Props {
  selectedRating: number;
  onRatingClick: (rating: number) => void;
}
export default function RatingSelector({ selectedRating, onRatingClick }: Props) {
  return (
    <ul className="flex justify-between mt-2 gap-x-4">
      {RATINGS.map(({ value, icon: Icon }) => (
        <li key={value}>
          <button
            aria-label="rating"
            type="button"
            className={`flex flex-col w-10 items-center text-xs ${
              selectedRating === value ? 'text-primary' : 'text-gray-500'
            }`}
            onClick={() => onRatingClick(value)}
          >
            <div className="flex items-center justify-center w-3 h-3 mb-1 border-2 border-gray-600 rounded-full">
              <div
                className={`w-[10px] h-[10px] rounded-full ${
                  selectedRating === value ? 'bg-primary' : 'bg-none'
                }`}
              />
            </div>
            <Icon className="text-gray-900 size-5" />
          </button>
        </li>
      ))}
    </ul>
  );
}
