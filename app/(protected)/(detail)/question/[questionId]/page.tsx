import { getQuestionById } from '@/app/data/question';
import QuestionDetail from './_components/question-detail';

interface Params {
  questionId: string;
}

export default async function Page({ params }: { params: Params }) {
  const questionDetail = await getQuestionById({ questionId: params.questionId });
  if (!questionDetail) return <div>없음</div>;
  return (
    <div className="p-4">
      <QuestionDetail questionInfo={questionDetail} />
    </div>
  );
}
