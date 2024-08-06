'use client';

import AnswerItem from '@/app/(protected)/(main)/question-list/_components/answer-item';
import getAnswers from '@/app/data/answer';
import Spinner from '@/components/ui/spinner';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { AnswerWithUser } from '@/type';
import { useCallback, useEffect, useState, useTransition } from 'react';

interface Props {
  answers: AnswerWithUser[];
  totalCount: number;
  userId: string;
  answerCursorId: string | null;
  questionId: string;
}

export default function AnswerList({
  answers,
  totalCount,
  userId,
  answerCursorId,
  questionId,
}: Props) {
  const [answerList, setAnswerList] = useState(answers);
  const [cursorId, setCursorId] = useState<string | null>(answerCursorId);
  const [isPending, startTransition] = useTransition();

  const loadMoreAnswer = useCallback(async () => {
    startTransition(async () => {
      const result = await getAnswers({ questionId, cursor: cursorId, take: 3 });
      setCursorId(result.cursorId);
      setAnswerList((prev) => [...prev, ...result.answers]);
    });
  }, [cursorId, questionId]);

  useEffect(() => {
    setAnswerList([...answers]);
  }, [answers]);

  const observer = useInfiniteScroll({
    callback: loadMoreAnswer,
    isLoading: isPending,
    cursorId,
  });

  return (
    <div className="flex flex-col gap-3 h-full items-center w-full">
      <div className="w-full">
        <p className="text-lg font-semibold text-left">받은 답변 {totalCount}</p>
      </div>
      <div className="w-full">
        <ul className="flex flex-col overflow-y-scroll h-[600px] gap-2">
          {answerList.map((answer) => (
            <li key={answer.id}>
              <AnswerItem answer={answer} userId={userId} />
            </li>
          ))}
          <div ref={observer} />
        </ul>
      </div>
      {isPending && <Spinner />}
    </div>
  );
}
