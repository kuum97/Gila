import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import PlusButton from '../../_components/plus-button';
import ActivityCreateForm from './activity-create-form';

export default function ActivityCreateModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <PlusButton />
      </DialogTrigger>
      <DialogContent className="bg-white h-screen overflow-y-auto">
        <ActivityCreateForm />
      </DialogContent>
    </Dialog>
  );
}
