/* eslint-disable no-underscore-dangle */

'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import AnswerList from '@/app/(protected)/(main)/question-list/_components/answer-list';
import AnswerForm from '@/app/(protected)/(main)/question-list/_components/answer-form';
import { AnswerWithUser, QuestionWithUserAndCount } from '@/type';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useState } from 'react';

interface Props {
  userId: string;
  question: QuestionWithUserAndCount;
}

export default function QuestionDetailModal({ question, userId }: Props) {
  const [answerList, setAnswerList] = useState<AnswerWithUser[]>([]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-primary">
          보기
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white h-screen flex flex-col justify-start pt-14">
        <DialogHeader className="h-fit gap-2">
          <DialogTitle>
            <p className="text-left text-4xl font-semibold leading-tight">{question.title}</p>
          </DialogTitle>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <p className="text-sm font-semibold">{question.location}</p>
              {/* <p className="text-xs">{String(question.createdAt)}</p> */}
            </div>
            <div className="flex justify-center items-center gap-2">
              <Avatar className="w-7 h-7">
                <AvatarImage
                  src={question.user.image ? question.user.image : '/test.png'}
                  className="object-cover w-7 h-7 rounded-full"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-sm">{question.user.nickname}</p>
            </div>
          </div>
          <DialogDescription className="text-left">{question.content}</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col">
          <AnswerForm questionId={question.id} />
          <AnswerList answers={answerList} totalCount={question._count.answers} userId={userId} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
