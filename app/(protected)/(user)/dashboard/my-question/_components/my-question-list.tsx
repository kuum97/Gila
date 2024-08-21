'use client';

import { getMyQuestions } from '@/app/data/question';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { QuestionWithUserAndAnswers } from '@/type';
import React, { useCallback, useEffect, useState, useTransition } from 'react';
import Spinner from '@/components/ui/spinner';
import MyQuestionCard from '@/app/(protected)/(user)/dashboard/my-question/_components/my-question-card';
import Image from 'next/image';

interface Props {
  myQuestions: QuestionWithUserAndAnswers[];
  myQuestionCursorId: string | null;
}

export default function MyQuestionList({ myQuestions, myQuestionCursorId }: Props) {
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

  if (myQuestions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 font-semibold -translate-y-16 h-screen-minus-134">
        <Image src="/GrayLogo.svg" width={150} height={50} alt="회색 로고" />
        <p className="text-center text-lg">
          오른쪽 위에 플러스 버튼을 눌러
          <br />
          질문해 보세요!
        </p>
      </div>
    );
  }

  return (
    <>
      <ul className="flex flex-col w-full gap-4 pb-20 tall:pb-0">
        {myQuestionList.map((myQuestion) => (
          <li key={myQuestion.id}>
            <MyQuestionCard myQuestionItem={myQuestion} />
          </li>
        ))}
        <div ref={observer} />
      </ul>
      {isPending && (
        <div className="flex justify-center w-full">
          <Spinner />
        </div>
      )}
    </>
  );
}
