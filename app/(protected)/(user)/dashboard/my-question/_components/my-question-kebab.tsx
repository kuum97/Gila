'use client';

import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { EllipsisVertical } from 'lucide-react';
import { QuestionWithUserAndAnswers } from '@/type';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import MyQuestionEditForm from '@/app/(protected)/(user)/dashboard/my-question/_components/my-question-edit-form';
import { cn } from '@/lib/utils';
import DeleteAlertModal from '@/components/delete-alert-modal';

interface Props {
  handleDelete: () => void;
  myQuestion: QuestionWithUserAndAnswers;
  disabled: boolean;
}

export default function MyQuestionKebab({ handleDelete, myQuestion, disabled }: Props) {
  const [isEditModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);

  const toggleEditModal = () => {
    setEditModalOpen(!isEditModalOpen);
  };

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger
          className={cn(
            'rounded-full transition outline-none',
            disabled ? 'cursor-not-allowed opacity-20' : 'hover:bg-slate-200',
          )}
          disabled={disabled}
          onClick={(e) => e.preventDefault()}
        >
          <EllipsisVertical className="w-5 h-5" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="relative bg-white" align="end">
          <DropdownMenuItem
            className="flex justify-center cursor-pointer"
            onSelect={toggleEditModal}
          >
            수정하기
          </DropdownMenuItem>
          <DropdownMenuSeparator className="w-full border-[0.5px]" />
          <DropdownMenuItem
            onSelect={() => setDeleteModalOpen(true)}
            className="flex justify-center cursor-pointer"
          >
            삭제하기
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={isEditModalOpen} onOpenChange={setEditModalOpen}>
        <DialogContent className="bg-white tall:left-[calc(50vw-10px)] tall:translate-x-0 tall:max-w-[420px]">
          <DialogHeader>
            <DialogTitle>수정하기</DialogTitle>
          </DialogHeader>
          <DialogDescription aria-describedby={undefined} />
          <MyQuestionEditForm
            questionId={myQuestion.id}
            questionTitle={myQuestion.title}
            questionContent={myQuestion.content}
            questionLocation={myQuestion.location}
            setEditModalOpen={toggleEditModal}
          />
        </DialogContent>
      </Dialog>

      <DeleteAlertModal
        deleteAction={handleDelete}
        isButton={false}
        content="삭제"
        open={isDeleteModalOpen}
        setModalOpen={setDeleteModalOpen}
      />
    </>
  );
}
