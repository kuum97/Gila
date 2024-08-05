import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import PlusButton from '@/app/(protected)/(user)/dashboard/_components/plus-button';
import ActivityCreateForm from '@/app/(protected)/(user)/dashboard/my-activity/_components/activity-create-form';

export default function ActivityCreateModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <PlusButton />
      </DialogTrigger>
      <DialogContent className="h-screen overflow-y-auto bg-white">
        <DialogTitle>활동 생성</DialogTitle>
        <DialogDescription aria-describedby={undefined} />
        <ActivityCreateForm />
      </DialogContent>
    </Dialog>
  );
}
