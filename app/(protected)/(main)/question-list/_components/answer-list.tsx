'use client';

import AnswerItem from '@/app/(protected)/(main)/question-list/_components/answer-item';
import { AnswerWithUser } from '@/type';
import { useState } from 'react';

interface Props {
  answers: AnswerWithUser[];
  totalCount: number;
  userId: string;
}

export default function AnswerList({ answers, totalCount, userId }: Props) {
  const [answerList, setAnswerList] = useState(answers);

  return (
    <div className="flex flex-col gap-3 h-full">
      <div className="flex items-center gap-3">
        <p className="text-lg font-semibold">받은 답변 {totalCount}</p>
      </div>
      <ul className="flex flex-col overflow-y-scroll h-96 gap-2">
        {answerList.map((answer) => (
          <li key={answer.id}>
            <AnswerItem answer={answer} userId={userId} />
          </li>
        ))}
      </ul>
    </div>
  );
}
