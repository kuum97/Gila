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
  handleEdit?: () => void;
  handleDelete?: () => void;
}

export default function DropdownKebab({ handleEdit, handleDelete }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <EllipsisVertical size={15} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="relative mr-9 bg-white">
        <DropdownMenuItem onClick={handleEdit} className="flex justify-center">
          수정하기
        </DropdownMenuItem>
        <div className="w-full border-[0.5px]" />
        <DropdownMenuItem onClick={handleDelete} className="flex justify-center">
          삭제하기
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
