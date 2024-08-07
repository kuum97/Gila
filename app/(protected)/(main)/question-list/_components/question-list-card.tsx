/* eslint-disable no-underscore-dangle */
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { QuestionWithUserAndAnswers } from '@/type';
import calculateDate from '@/utils/calculateData';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Props {
  questionItem: QuestionWithUserAndAnswers & { answerCursorId: string | null };
}

export default function QuestionListCard({ questionItem }: Props) {
  const createaAt = calculateDate(questionItem.createdAt);
  return (
    <Link href={`/question/${questionItem.id}`}>
      <Card className="flex flex-col items-start w-full p-0 overflow-hidden border border-gray-300 rounded-md">
        <CardHeader className="px-2 py-4">
          <CardTitle className="w-full text-xl font-bold truncate">{questionItem.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between w-full p-2 pr-3 text-sm border-t">
          <div className="flex items-center w-full gap-3">
            <p className="font-medium text-nowrap">{questionItem.location}</p>
            <p className="text-xs text-center text-nowrap text-gray_500">{`${createaAt.time}${createaAt.result}전`}</p>
          </div>
          <div className="flex items-center font-medium gap-[2px]">
            <MessageCircle size={13} />
            <p className="w-4 text-center">{questionItem._count.answers}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
