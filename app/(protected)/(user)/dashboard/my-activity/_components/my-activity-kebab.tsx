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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface Props {
  handleDelete: () => void;
}

export default function MyActivityKebab({ handleDelete }: Props) {
  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger className="p-2 transition rounded-full outline-none hover:bg-slate-200">
          <EllipsisVertical className="w-5 h-5" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="relative mr-10 bg-white">
          <DropdownMenuItem className="cursor-pointer" asChild>
            <DialogTrigger className="flex justify-center w-full">수정하기</DialogTrigger>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="w-full border-[0.5px]" />
          <DropdownMenuItem onClick={handleDelete} className="flex justify-center cursor-pointer">
            삭제하기
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>????</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
