'use client';

import { getMyQuestions } from '@/app/data/question';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { QuestionWithUserAndAnswers } from '@/type';
import React, { useCallback, useEffect, useState, useTransition } from 'react';
import Spinner from '@/components/ui/spinner';
import MyQuestionCard from '@/app/(protected)/(user)/(dashboard)/my-question/_components/my-question-card';

interface Props {
  myQuestions: QuestionWithUserAndAnswers[];
  myQuestionCursorId: string | null;
  userId: string;
}

export default function MyQuestionList({ myQuestions, myQuestionCursorId, userId }: Props) {
  const [myQuestionList, setMyQuestionList] = useState<QuestionWithUserAndAnswers[]>(myQuestions);
  const [cursorId, setCursorId] = useState(myQuestionCursorId);
  const [isPending, startTransition] = useTransition();

  const loadMoreMyQuestion = useCallback(async () => {
    startTransition(async () => {
      if (!cursorId) return;
      const result = await getMyQuestions({
        take: 3,
        answerTake: 7,
        cursor: cursorId,
      });
      setMyQuestionList((prev) => [...prev, ...result.questions]);
      setCursorId(result.cursorId);
    });
  }, [cursorId]);

  useEffect(() => {
    setMyQuestionList(myQuestions);
    setCursorId(myQuestionCursorId);
  }, [myQuestions, myQuestionCursorId]);

  const observer = useInfiniteScroll({
    callback: loadMoreMyQuestion,
    cursorId,
    isLoading: isPending,
  });

  return (
    <div className="flex flex-col items-center pb-5">
      <ul className="flex flex-col gap-3 w-full">
        {myQuestionList.map((myQuestion) => (
          <li key={myQuestion.id}>
            <MyQuestionCard myQuestionItem={myQuestion} userId={userId} />
          </li>
        ))}
        <div ref={observer} />
      </ul>
      {isPending && <Spinner />}
    </div>
  );
}
