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
import DeleteAlertModal from '@/components/delete-alert-modal';

interface Props {
  handleDelete: () => void;
  handleEdit: () => void;
}

export default function AnswerKebab({ handleDelete, handleEdit }: Props) {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="transition rounded-full outline-none hover:bg-slate-200">
          <EllipsisVertical className="w-5 h-5" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="relative bg-white" align="end">
          <DropdownMenuItem className="flex justify-center" onClick={handleEdit}>
            수정하기
          </DropdownMenuItem>
          <DropdownMenuSeparator className="w-full border-[0.5px]" />
          <DropdownMenuItem
            className="flex justify-center"
            onSelect={() => setDeleteModalOpen(true)}
          >
            삭제하기
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
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
