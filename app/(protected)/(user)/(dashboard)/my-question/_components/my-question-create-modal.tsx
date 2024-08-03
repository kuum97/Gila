import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import React from 'react';
import PlusButton from '@/app/(protected)/(user)/(dashboard)/_components/plus-button';
import MyQuestionForm from '@/app/(protected)/(user)/(dashboard)/my-question/_components/my-question-form';

export default function MyQuestionCreateModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <PlusButton />
      </DialogTrigger>
      <DialogTitle>
        <div />
      </DialogTitle>
      <DialogContent className="bg-white">
        <MyQuestionForm />
      </DialogContent>
    </Dialog>
  );
}
