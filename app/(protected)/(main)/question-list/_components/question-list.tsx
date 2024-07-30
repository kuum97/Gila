'use client';

import QuestionListCard from '@/app/(protected)/(main)/question-list/_components/question-list-card';
import { QuestionWithUserAndCount } from '@/type';
import { useEffect, useState } from 'react';

interface Props {
  userId: string;
  questions: QuestionWithUserAndCount[];
}

export default function QuestionList({ questions, userId }: Props) {
  const [questionList, setQuestionList] = useState<QuestionWithUserAndCount[]>([]);

  useEffect(() => {
    setQuestionList([...questions]);
  }, [questions]);

  return (
    <div className="h-[450px] w-full overflow-y-scroll overflow-x-hidden">
      <ul className="flex flex-col items-center gap-2">
        {questionList.map((question) => (
          <li key={question.id}>
            <QuestionListCard questionItem={question} userId={userId} />
          </li>
        ))}
      </ul>
    </div>
  );
}
