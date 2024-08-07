import { getMyQuestions } from '@/app/data/question';
import MyQuestionList from '@/app/(protected)/(user)/dashboard/my-question/_components/my-question-list';
import MyQuestionCreateModal from '@/app/(protected)/(user)/dashboard/my-question/_components/my-question-create-modal';

export default async function Page() {
  const myQuestions = await getMyQuestions({ take: 10, answerTake: 5 });
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">내 질문</h1>
          <p className="text-base font-medium">
            <span className="text-xl text-primary font-semibold">길라</span>들에게 직접
            질문해보세요!
          </p>
        </div>
        <MyQuestionCreateModal />
      </div>
      <MyQuestionList
        myQuestions={myQuestions.questions}
        myQuestionCursorId={myQuestions.cursorId}
      />
    </div>
  );
}
