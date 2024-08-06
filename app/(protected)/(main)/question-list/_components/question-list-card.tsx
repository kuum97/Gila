/* eslint-disable no-underscore-dangle */
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { QuestionWithUserAndAnswers } from '@/type';
import calculateDate from '@/utils/calculateData';
import Link from 'next/link';

interface Props {
  questionItem: QuestionWithUserAndAnswers & { answerCursorId: string | null };
}

export default function QuestionListCard({ questionItem }: Props) {
  const createaAt = calculateDate(questionItem.createdAt);
  return (
    <Link href={`/question/${questionItem.id}`}>
      <div className="flex items-center justify-between gap-2 p-3 overflow-hidden text-xs border border-none rounded-md shadow-md w-80">
        <h1 className="w-32 font-semibold truncate">{questionItem.title}</h1>
        <p className="text-[10px] text-nowrap w-10 text-center text-gray_500">{`${createaAt.time}${createaAt.result}전`}</p>
        <div className="flex items-center gap-[2px]">
          <MessageCircle size={13} />
          <p className="w-2 text-center">{questionItem._count.answers}</p>
        </div>
      </div>
    </Link>
  );
}
