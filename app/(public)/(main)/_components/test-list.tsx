import React from 'react';
import ActivityListCard from '@/app/(public)/(main)/_components/activity-list-card';
import QuestionListCard from './question-list-card';

export default function ActivityList() {
  return (
    <div className="p-5">
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-bold text-lg">전체</h1>
        <button className="border border-black px-5 py-2 rounded-xl text-xs" type="button">
          추천순 ▼
        </button>
      </div>
      <div className="flex flex-col gap-3">
        <QuestionListCard />
        <QuestionListCard />
        <QuestionListCard />
        <QuestionListCard />
        <QuestionListCard />
        <ActivityListCard />
        <ActivityListCard />
        <ActivityListCard />
        <ActivityListCard />
        <ActivityListCard />
      </div>
    </div>
  );
}
