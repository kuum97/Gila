'use client';

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
import { cn } from '@/lib/utils';

interface Props {
  handleDelete: () => void;
  myQuestion: QuestionWithUserAndAnswers;
  disabled: boolean;
}

export default function MyQuestionKebab({ handleDelete, myQuestion, disabled }: Props) {
  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger
          className={cn(
            'rounded-full transition outline-none',
            disabled ? 'cursor-not-allowed opacity-20' : 'hover:bg-slate-200',
          )}
          disabled={disabled}
        >
          <EllipsisVertical className="w-5 h-5" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="relative bg-white mr-9">
          <DropdownMenuItem className="flex justify-center cursor-pointer">
            <DialogTrigger className="w-full">수정하기</DialogTrigger>
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
