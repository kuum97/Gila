import { Suspense } from 'react';
import { getMyQuestions } from '@/app/data/question';
import MyQuestionList from '@/app/(protected)/(user)/dashboard/my-question/_components/my-question-list';
import MyQuestionCreateModal from '@/app/(protected)/(user)/dashboard/my-question/_components/my-question-create-modal';
import QuestionCardSkeleton from '@/components/skeletons/question-card-skeleton';

export default async function Page() {
  const myQuestions = await getMyQuestions({ take: 7, answerTake: 5 });
  return (
    <div className="p-5">
      <div className="flex justify-between w-full mb-5">
        <h1 className="text-2xl font-bold">내 질문</h1>
        <MyQuestionCreateModal />
      </div>
      <Suspense fallback={<QuestionCardSkeleton />}>
        <MyQuestionList
          myQuestions={myQuestions.questions}
          myQuestionCursorId={myQuestions.cursorId}
        />
      </Suspense>
    </div>
  );
}
