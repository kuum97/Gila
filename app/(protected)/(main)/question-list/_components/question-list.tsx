'use client';

import QuestionListCard from '@/app/(protected)/(main)/question-list/_components/question-list-card';
import { getQuestions } from '@/app/data/question';
import { QuestionWithUserAndAnswerAndCount } from '@/type';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useRef, useState, useTransition } from 'react';

interface Props {
  userId: string;
  questions: QuestionWithUserAndAnswerAndCount[];
  questionCursorId: string | null;
}

export default function QuestionList({ questions, userId, questionCursorId }: Props) {
  const [questionList, setQuestionList] = useState<QuestionWithUserAndAnswerAndCount[]>([]);
  const [cursorId, setCursorId] = useState(questionCursorId);
  const [isPending, startTransition] = useTransition();
  const query = useSearchParams();
  const obsRef = useRef(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isPending && cursorId) {
          loadMoreQuestion();
        }
      },
      { threshold: 1 },
    );

    if (obsRef.current) observer.observe(obsRef.current);

    return () => {
      observer.disconnect();
    };
  }, [cursorId, isPending, loadMoreQuestion]);

  return (
    <div className="h-[450px] w-full overflow-y-scroll overflow-x-hidden">
      <ul className="flex flex-col items-center gap-2">
        {questionList.map((question) => (
          <li key={question.id}>
            <QuestionListCard questionItem={question} userId={userId} />
          </li>
        ))}
        <div ref={obsRef} />
      </ul>
    </div>
  );
}
