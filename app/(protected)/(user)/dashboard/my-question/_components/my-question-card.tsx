'use client';

/* eslint-disable no-underscore-dangle */
import { Loader2, MessageCircle } from 'lucide-react';
import React, { useTransition } from 'react';
import { QuestionWithUserAndAnswers } from '@/type';
import calculateDate from '@/utils/calculateData';
import { deleteQuestion } from '@/app/action/question';
import { toast } from 'sonner';
import QuestionDetailModal from '@/app/(protected)/(main)/question-list/_components/question-detail-modal';
import MyQuestionKebab from '@/app/(protected)/(user)/dashboard/my-question/_components/my-question-kebab';

interface Props {
  myQuestionItem: QuestionWithUserAndAnswers;
  userId: string;
}

export default function MyQuestionCard({ myQuestionItem, userId }: Props) {
  const [isPending, startTransition] = useTransition();
  const createdAt = calculateDate(myQuestionItem.createdAt);

  const onDelete = () => {
    startTransition(async () => {
      const action = await deleteQuestion(myQuestionItem.id);
      if (!action.success) {
        toast.error(action.message);
        return;
      }
      toast.success(action.message);
    });
  };

  return (
    <div className="w-full border rounded-md flex justify-between items-center p-3 text-xs overflow-hidden relative">
      {isPending && (
        <div
          className="absolute inset-0 bg-black/50 rounded-md z-10 cursor-not-allowed flex justify-center items-center"
          onClick={(e: React.MouseEvent<HTMLDivElement>) => {
            e.preventDefault();
          }}
        >
          <Loader2 className="animate-spin h-8 w-8" />
        </div>
      )}
      <h1 className="w-[160px] truncate">{myQuestionItem.title}</h1>
      <div className="flex gap-2 items-center">
        <p className="text-[10px] text-nowrap w-10 text-center text-gray_500">{`${createdAt.time}${createdAt.result}전`}</p>
        <div className="flex items-center gap-[2px]">
          <MessageCircle size={13} />
          <p>{myQuestionItem._count.answers}</p>
        </div>
        <QuestionDetailModal question={myQuestionItem} userId={userId} createaAt={createdAt} />
        <div className="z-50">
          <MyQuestionKebab myQuestion={myQuestionItem} handleDelete={onDelete} />
        </div>
      </div>
    </div>
  );
}
