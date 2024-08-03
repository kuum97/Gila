import PlusButton from '@/app/(protected)/(user)/(dashboard)/_components/plus-button';
import { getMyQuestions } from '@/app/data/question';
import MyQuestionList from './_components/my-question-list';

export default async function Page() {
  const myQuestions = await getMyQuestions({ take: 7, answerTake: 5 });
  return (
    <>
      <div>
        <h1 className="text-lg font-bold">내 질문</h1>
        <MyQuestionList
          myQuestions={myQuestions.questions}
          myQuestionCursorId={myQuestions.cursorId}
        />
      </div>
      <PlusButton />
    </>
  );
}
