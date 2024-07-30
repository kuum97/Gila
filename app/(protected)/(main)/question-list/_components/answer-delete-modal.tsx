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

export default function AnswerDeleteModal({ isDeleteAnswer }: { isDeleteAnswer: () => void }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="bg-primary text-xs py-1 px-2 h-fit rounded-md">
        삭제
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white w-80 rounded-lg">
        <AlertDialogHeader>
          <AlertDialogTitle>정말 삭제하시나요?</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>돌아가기</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              isDeleteAnswer();
            }}
          >
            삭제하기
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
