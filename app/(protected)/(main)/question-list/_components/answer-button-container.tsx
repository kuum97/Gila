'use client';

import { Button } from '@/components/ui/button';
import { deleteAnswer } from '@/app/action/answer';
import AnswerDeleteModal from './answer-delete-modal';

interface Props {
  answerId: string;
}

export default function AnswerButtonContainer({ answerId }: Props) {
  const isDeleteAnswer = async () => {
    await deleteAnswer(answerId);
  };

  return (
    <div className="flex items-center gap-1">
      <Button className="text-xs py-1 px-2 h-fit">수정</Button>
      <AnswerDeleteModal isDeleteAnswer={isDeleteAnswer} />
    </div>
  );
}
