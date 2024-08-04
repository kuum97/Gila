import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import PlusButton from '@/app/(protected)/(user)/dashboard/_components/plus-button';
import ActivityCreateForm from '@/app/(protected)/(user)/dashboard/my-activity/_components/activity-create-form';

export default function ActivityCreateModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <PlusButton />
      </DialogTrigger>
      <DialogContent className="h-screen overflow-y-auto bg-white">
        <ActivityCreateForm />
      </DialogContent>
    </Dialog>
  );
}
