'use client';

import { Button } from '@/components/ui/button';

interface Props {
  isDeleteAnswer: () => void;
}

export default function AnswerButtonContainer({ isDeleteAnswer }: Props) {
  return (
    <div className="flex items-center gap-1">
      <Button className="text-xs py-1 px-2 h-fit">수정</Button>
      <Button className="text-xs py-1 px-2 h-fit" onClick={isDeleteAnswer}>
        삭제
      </Button>
    </div>
  );
}
