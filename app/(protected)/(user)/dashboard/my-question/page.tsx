import { getMyQuestions } from '@/app/data/question';
import MyQuestionList from '@/app/(protected)/(user)/dashboard/my-question/_components/my-question-list';
import MyQuestionCreateModal from '@/app/(protected)/(user)/dashboard/my-question/_components/my-question-create-modal';

export default async function Page() {
  const myQuestions = await getMyQuestions({ take: 10, answerTake: 5 });
  return (
    <>
      <div className="p-5">
        <h1 className="text-2xl font-bold">내 질문</h1>
        <MyQuestionList
          myQuestions={myQuestions.questions}
          myQuestionCursorId={myQuestions.cursorId}
        />
      </div>
      <MyQuestionCreateModal />
    </>
  );
}
