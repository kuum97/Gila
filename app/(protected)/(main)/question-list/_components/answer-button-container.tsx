'use client';

import { Button } from '@/components/ui/button';
import { deleteAnswer } from '@/app/action/answer';
import { toast } from 'sonner';
import AnswerDeleteModal from '@/app/(protected)/(main)/question-list/_components/answer-delete-modal';

interface Props {
  answerId: string;
  handleEditAnswer: () => void;
}

export default function AnswerButtonContainer({ answerId, handleEditAnswer }: Props) {
  const isDeleteAnswer = async () => {
    const result = await deleteAnswer(answerId);
    toast.success(result.message);
  };

  return (
    <div className="flex items-center gap-1">
      <Button className="text-xs py-1 px-2 h-fit" onClick={handleEditAnswer}>
        수정
      </Button>
      <AnswerDeleteModal isDeleteAnswer={isDeleteAnswer} />
    </div>
  );
}
