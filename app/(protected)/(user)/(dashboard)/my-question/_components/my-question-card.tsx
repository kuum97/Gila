/* eslint-disable no-console */
import { MessageCircle } from 'lucide-react';
import React from 'react';
import { QuestionWithUserAndAnswers } from '@/type';
import calculateDate from '@/utils/calculateData';

import MyQuestionKebab from './my-question-kebab';

interface Props {
  myQuestionItem: QuestionWithUserAndAnswers;
}

export default function MyQuestionCard({ myQuestionItem }: Props) {
  const createaAt = calculateDate(myQuestionItem.createdAt);

  return (
    <div className="w-full border rounded-md flex justify-between items-center p-3 text-xs overflow-hidden ">
      <h1 className="w-[160px] truncate">{myQuestionItem.title}</h1>
      <div className="flex gap-2 items-center">
        <div className="flex items-center gap-[2px]">
          <MessageCircle size={13} />
          <p>24</p>
        </div>
        <div className="top-2 right-2 z-50">
          <MyQuestionKebab handleDelete={() => console.log('sd')} />
        </div>
      </div>
    </div>
  );
}
