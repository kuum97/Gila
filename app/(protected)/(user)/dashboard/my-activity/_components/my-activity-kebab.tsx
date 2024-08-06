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
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ActivityWithFavoriteAndCount } from '@/type';
import ActivityEditForm from '@/app/(protected)/(user)/dashboard/my-activity/_components/activity-edit-form';

interface Props {
  handleDelete: () => void;
  activity: ActivityWithFavoriteAndCount;
}

export default function MyActivityKebab({ handleDelete, activity }: Props) {
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
      <DialogContent className="h-screen overflow-y-auto bg-white">
        <DialogTitle>활동 수정</DialogTitle>
        <ActivityEditForm activity={activity} />
      </DialogContent>
    </Dialog>
  );
}
