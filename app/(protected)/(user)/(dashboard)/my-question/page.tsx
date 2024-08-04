import { getMyQuestions } from '@/app/data/question';
import { getCurrentUserId } from '@/app/data/user';
import MyQuestionList from '@/app/(protected)/(user)/(dashboard)/my-question/_components/my-question-list';
import MyQuestionCreateModal from '@/app/(protected)/(user)/(dashboard)/my-question/_components/my-question-create-modal';

export default async function Page() {
  const myQuestions = await getMyQuestions({ take: 10, answerTake: 5 });
  const userId = await getCurrentUserId();
  return (
    <>
      <div>
        <h1 className="text-lg font-bold mb-3">내 질문</h1>
        <MyQuestionList
          myQuestions={myQuestions.questions}
          myQuestionCursorId={myQuestions.cursorId}
          userId={userId}
        />
      </div>
      <MyQuestionCreateModal />
    </>
  );
}
