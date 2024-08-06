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
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { ActivityWithFavoriteAndCount } from '@/type';
import ActivityEditForm from '@/app/(protected)/(user)/dashboard/my-activity/_components/activity-edit-form';
import DeleteAlertModal from '@/components/delete-alert-modal';

interface Props {
  handleDelete: () => void;
  activity: ActivityWithFavoriteAndCount;
}

export default function MyActivityKebab({ handleDelete, activity }: Props) {
  const [isEditModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="p-2 transition rounded-full outline-none hover:bg-slate-200">
          <EllipsisVertical className="w-5 h-5" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="relative mr-10 bg-white">
          <DropdownMenuItem
            className="cursor-pointer flex justify-center"
            onSelect={() => setEditModalOpen(true)}
          >
            수정하기
          </DropdownMenuItem>
          <DropdownMenuSeparator className="w-full border-[0.5px]" />
          <DropdownMenuItem
            className="flex justify-center cursor-pointer"
            onSelect={() => setDeleteModalOpen(true)}
          >
            삭제하기
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={isEditModalOpen} onOpenChange={setEditModalOpen}>
        <DialogContent className="h-screen overflow-y-auto bg-white">
          <DialogTitle>활동 수정</DialogTitle>
          <ActivityEditForm activity={activity} />
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
