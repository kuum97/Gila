'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { AlertDialogDescription } from '@radix-ui/react-alert-dialog';

interface Props {
  deleteAction: () => void;
  isButton: boolean;
  content: string;
}

export default function DeleteAlertModal({ deleteAction, isButton, content }: Props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        className={`${isButton ? 'bg-primary text-xs' : 'text-sm w-full'} py-1 px-2 h-fit rounded-md`}
      >
        {content}
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white w-80 rounded-lg">
        <AlertDialogHeader>
          <AlertDialogTitle>정말 {content}하시나요?</AlertDialogTitle>
          <AlertDialogDescription aria-describedby={undefined} />
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>돌아가기</AlertDialogCancel>
          <AlertDialogAction onClick={deleteAction}>{content}하기</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
