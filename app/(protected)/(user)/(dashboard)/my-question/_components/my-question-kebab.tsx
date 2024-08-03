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

interface Props {
  handleDelete: () => void;
}

export default function MyQuestionKebab({ handleDelete }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="p-2 hover:bg-slate-200 rounded-full transition outline-none">
        <EllipsisVertical className="h-5 w-5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="relative mr-9 bg-white">
        <DropdownMenuItem className="flex justify-center cursor-pointer">수정하기</DropdownMenuItem>
        <div className="w-full border-[0.5px]" />
        <DropdownMenuItem onClick={handleDelete} className="flex justify-center cursor-pointer">
          삭제하기
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
