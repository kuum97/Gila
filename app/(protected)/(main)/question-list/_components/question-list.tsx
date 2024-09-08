'use client';

import QuestionListCard from '@/app/(protected)/(main)/question-list/_components/question-list-card';
import { getQuestions } from '@/app/data/question';
import Spinner from '@/components/ui/spinner';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { QuestionWithUserAndAnswers } from '@/type';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState, useTransition } from 'react';

interface Props {
  questions: (QuestionWithUserAndAnswers & { answerCursorId: string | null })[];
  questionCursorId: string | null;
  location: string;
}

export default function QuestionList({ questions, questionCursorId, location }: Props) {
  const [questionList, setQuestionList] = useState<
    (QuestionWithUserAndAnswers & { answerCursorId: string | null })[]
  >([]);
  const [cursorId, setCursorId] = useState(questionCursorId);
  const [isPending, startTransition] = useTransition();
  const query = useSearchParams();

  const loadMoreQuestion = useCallback(async () => {
    const listOrder = query.get('sort') ? 'answerLen' : 'recent';
    startTransition(async () => {
      if (!cursorId) return;
      const result = await getQuestions({
        take: 3,
        answerTake: 7,
        cursor: cursorId,
        order: listOrder,
        location,
      });
      setCursorId(result.cursorId);
      setQuestionList((prev) => [...prev, ...result.questions]);
    });
  }, [cursorId, location, query]);

  useEffect(() => {
    setQuestionList([...questions]);
    setCursorId(questionCursorId);
  }, [questionCursorId, questions]);

  const observer = useInfiniteScroll({
    callback: loadMoreQuestion,
    cursorId,
    isLoading: isPending,
  });

  if (questions.length === 0) {
    return (
      <div className="flex items-center justify-center flex-col h-[50vh] gap-5">
        <Image src="/GrayLogo.svg" width={150} height={50} alt="회색 로고" />
        <p className="text-center text-xl font-bold">
          <span className="text-xl text-primary">{location}</span>에<br /> 아직 등록된 길라가
          없습니다.
        </p>
        <Link
          href="/question-list"
          className="flex items-center justify-center px-4 py-3 font-semibold rounded-lg bg-primary text-white_light hover:bg-primary_dark"
        >
          전체 리스트 둘러보기
        </Link>
      </div>
    );
  }

  return (
    <>
      <ul className="flex flex-col items-center w-full gap-5 min-h-[25vh]">
        {questionList.map((question) => (
          <li key={question.id} className="w-full">
            <QuestionListCard questionItem={question} />
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
