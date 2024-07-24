import React from 'react';
import ListCard from '@/app/(public)/(main)/_components/list-card';

export default function List() {
  return (
    <div className="p-5">
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-bold text-xl">전체</h1>
        <button className="border border-black px-5 py-2 rounded-xl text-sm" type="button">
          추천순 ▼
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
      </div>
    </div>
  );
}
