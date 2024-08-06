'use client';

import React from 'react';
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
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="transition rounded-full outline-none hover:bg-slate-200">
        <EllipsisVertical className="w-5 h-5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="relative mr-10 bg-white">
        <DropdownMenuItem className="flex justify-center" onClick={handleEdit}>
          수정
        </DropdownMenuItem>
        <DropdownMenuSeparator className="w-full border-[0.5px]" />
        <DropdownMenuItem className="flex justify-center" asChild>
          <DeleteAlertModal deleteAction={handleDelete} isButton={false} content="삭제" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
