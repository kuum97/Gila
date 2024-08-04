'use client';

/* eslint-disable no-console */

import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { EllipsisVertical } from 'lucide-react';
import { QuestionWithUserAndAnswers } from '@/type';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import MyQuestionEditForm from '@/app/(protected)/(user)/dashboard/my-question/_components/my-question-edit-form';

interface Props {
  handleDelete: () => void;
  myQuestion: QuestionWithUserAndAnswers;
}

export default function MyQuestionKebab({ handleDelete, myQuestion }: Props) {
  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger className="hover:bg-slate-200 rounded-full transition outline-none">
          <EllipsisVertical className="h-5 w-5" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="relative mr-9 bg-white">
          <DropdownMenuItem className="flex justify-center cursor-pointer">
            <DialogTrigger>수정하기</DialogTrigger>
          </DropdownMenuItem>
          <div className="w-full border-[0.5px]" />
          <DropdownMenuItem onClick={handleDelete} className="flex justify-center cursor-pointer">
            삭제하기
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DialogTitle>
        <div />
      </DialogTitle>
      <DialogContent className="bg-white">
        <MyQuestionEditForm
          questionId={myQuestion.id}
          questionTitle={myQuestion.title}
          questionContent={myQuestion.content}
          questionLocation={myQuestion.location}
        />
      </DialogContent>
    </Dialog>
  );
}
