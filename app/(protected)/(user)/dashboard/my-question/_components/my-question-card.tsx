'use client';

/* eslint-disable no-underscore-dangle */
import { Loader2, MessageCircle } from 'lucide-react';
import React, { useTransition } from 'react';
import { QuestionWithUserAndAnswers } from '@/type';
import calculateDate from '@/utils/calculateData';
import { deleteQuestion } from '@/app/action/question';
import { toast } from 'sonner';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MyQuestionKebab from '@/app/(protected)/(user)/dashboard/my-question/_components/my-question-kebab';
import Link from 'next/link';

interface Props {
  myQuestionItem: QuestionWithUserAndAnswers;
}

export default function MyQuestionCard({ myQuestionItem }: Props) {
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

  const isDisabled = myQuestionItem._count.answers > 0;

  return (
    <Link href={`/question/${myQuestionItem.id}`}>
      <div className="relative">
        {isPending && (
          <div
            className="absolute inset-0 z-10 flex items-center justify-center rounded-md cursor-not-allowed bg-black/50"
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              e.preventDefault();
            }}
          >
            <Loader2 className="w-8 h-8 animate-spin" />
          </div>
        )}
        <Card className="flex flex-col items-start w-full p-0 overflow-hidden border border-gray-200 rounded-md shadow-md hover:shadow-lg">
          <CardHeader className="flex flex-row w-full gap-1 px-2 py-3">
            <CardTitle className="w-full text-2xl font-semibold truncate">
              {myQuestionItem.title}
            </CardTitle>
            <div onClick={(e) => e.stopPropagation()}>
              <MyQuestionKebab
                myQuestion={myQuestionItem}
                handleDelete={onDelete}
                disabled={isDisabled}
              />
            </div>
          </CardHeader>
          <CardContent className="flex items-center justify-between w-full p-2 pr-3 text-sm border-t">
            <div className="flex items-center w-full gap-3">
              <p className="font-medium text-nowrap">{myQuestionItem.location}</p>
              <p className="text-xs text-center text-nowrap text-gray_500">{`${createdAt.time}${createdAt.result}전`}</p>
            </div>
            <div className="flex items-center font-medium gap-[2px]">
              <MessageCircle size={13} />
              <p className="w-4 text-center">{myQuestionItem._count.answers}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Link>
  );
}
