import Image from 'next/image';
import React from 'react';
import { MessageCircle } from 'lucide-react';
import QuestionDetailModal from '@/app/(protected)/(main)/question-list/_components/question-detail-modal';
import { QuestionWithUserAndCount } from '@/type';

export default function QuestionListCard({ question }: { question: QuestionWithUserAndCount }) {
  return (
    <div className="flex items-center justify-between w-full gap-2 p-3 overflow-hidden text-xs border border-none rounded-md shadow-md">
      <h1 className="w-[160px] truncate">{question.title}</h1>
      <div className="flex items-center gap-1">
        <div className="relative w-[20px] h-[20px] flex overflow-hidden rounded-full">
          <Image
            src={question.user.image ? question.user.image : '/test.png'}
            alt="유저 이미지"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <span className="font-bold">{question.user.image}</span>
      </div>
      <div className="flex items-center gap-[2px]">
        <MessageCircle size={13} />
        <p>{question._count.answers}</p>
      </div>
      <QuestionDetailModal question={question} />
    </div>
  );
}
