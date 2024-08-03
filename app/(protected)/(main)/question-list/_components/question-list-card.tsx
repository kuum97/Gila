/* eslint-disable no-underscore-dangle */
import React from 'react';
import { MessageCircle } from 'lucide-react';
import QuestionDetailModal from '@/app/(protected)/(main)/question-list/_components/question-detail-modal';
import { QuestionWithUserAndAnswers } from '@/type';
import calculateDate from '@/utils/calculateData';

interface Props {
  questionItem: QuestionWithUserAndAnswers & { answerCursorId: string | null };
  userId: string;
}

export default function QuestionListCard({ questionItem, userId }: Props) {
  const createaAt = calculateDate(questionItem.createdAt);
  return (
    <div className="flex items-center justify-between w-80 gap-2 p-3 text-xs overflow-hidden border border-none rounded-md shadow-md">
      <h1 className="w-32 truncate font-semibold">{questionItem.title}</h1>
      <p className="text-[10px] text-nowrap w-10 text-center text-gray_500">{`${createaAt.time}${createaAt.result}전`}</p>
      <div className="flex items-center gap-[2px]">
        <MessageCircle size={13} />
        <p className="w-2 text-center">{questionItem._count.answers}</p>
      </div>
      <QuestionDetailModal question={questionItem} userId={userId} createaAt={createaAt} />
    </div>
  );
}
