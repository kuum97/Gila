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
  open?: boolean;
  setModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DeleteAlertModal({
  deleteAction,
  isButton,
  content,
  open,
  setModalOpen,
}: Props) {
  return (
    <AlertDialog open={open} onOpenChange={setModalOpen}>
      {isButton && (
        <AlertDialogTrigger
          className={`${isButton ? 'bg-red text-white text-base' : 'text-sm'} px-4 py-2 rounded-md w-full`}
        >
          {content}
        </AlertDialogTrigger>
      )}
      <AlertDialogContent className="bg-white w-80 rounded-lg left-[calc(50vw+40px)] translate-x-0 max-w-[420px]">
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
