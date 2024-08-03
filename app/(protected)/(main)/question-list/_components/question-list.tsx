'use client';

import QuestionListCard from '@/app/(protected)/(main)/question-list/_components/question-list-card';
import { getQuestions } from '@/app/data/question';
import Spinner from '@/components/ui/spinner';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { QuestionWithUserAndAnswers } from '@/type';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState, useTransition } from 'react';

interface Props {
  userId: string;
  questions: (QuestionWithUserAndAnswers & { answerCursorId: string | null })[];
  questionCursorId: string | null;
}

export default function QuestionList({ questions, userId, questionCursorId }: Props) {
  const [questionList, setQuestionList] = useState<
    (QuestionWithUserAndAnswers & { answerCursorId: string | null })[]
  >([]);
  const [cursorId, setCursorId] = useState(questionCursorId);
  const [isPending, startTransition] = useTransition();
  const query = useSearchParams();

  const loadMoreQuestion = useCallback(async () => {
    const listOrder = query.get('sort') ? 'answerLen' : 'recent';
    startTransition(async () => {
      const result = await getQuestions({
        take: 3,
        answerTake: 7,
        cursor: cursorId,
        order: listOrder,
      });
      setCursorId(result.cursorId);
      setQuestionList((prev) => [...prev, ...result.questions]);
    });
  }, [cursorId, query]);

  useEffect(() => {
    setQuestionList([...questions]);
    setCursorId(questionCursorId);
  }, [questionCursorId, questions]);

  const observer = useInfiniteScroll({
    callback: loadMoreQuestion,
    cursorId,
    isLoading: isPending,
  });

  return (
    <div className="h-[450px] w-full overflow-y-scroll overflow-x-hidden flex flex-col items-center">
      <ul className="flex flex-col items-center gap-2">
        {questionList.map((question) => (
          <li key={question.id}>
            <QuestionListCard questionItem={question} userId={userId} />
          </li>
        ))}
        <div ref={observer} />
      </ul>
      {isPending && <Spinner />}
    </div>
  );
}
