'use client';

import AnswerItem from '@/app/(protected)/(main)/question-list/_components/answer-item';
import { getAnswers } from '@/app/data/answer';
import { AnswerWithUser } from '@/type';
import { useCallback, useEffect, useRef, useState, useTransition } from 'react';

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
  const [cursorId, setCursorId] = useState(answerCursorId);
  const [isPending, startTransition] = useTransition();
  const obsRef = useRef(null);

  const loadMoreAnswer = useCallback(async () => {
    startTransition(async () => {
      const result = await getAnswers({ questionId, cursor: answerCursorId, take: 3 });
      setCursorId(result.cursorId);
      setAnswerList((prev) => [...prev, ...result.answers]);
    });
  }, [answerCursorId, questionId]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isPending && cursorId) {
          loadMoreAnswer();
        }
      },
      { threshold: 1 },
    );

    if (obsRef.current) observer.observe(obsRef.current);

    return () => {
      observer.disconnect();
    };
  }, [cursorId, isPending, loadMoreAnswer]);

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
        <div ref={obsRef} />
      </ul>
    </div>
  );
}
