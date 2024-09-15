import { getMyQuestions } from '@/app/data/question';
import MyQuestionList from './my-question-list';

export default async function MyQuestionContainer() {
  const myQuestions = await getMyQuestions({ take: 7, answerTake: 5 });

  return (
    <MyQuestionList myQuestions={myQuestions.questions} myQuestionCursorId={myQuestions.cursorId} />
  );
}
