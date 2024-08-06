import { getQuestionById } from '@/app/data/question';

interface Params {
  questionId: string;
}

export default async function Page({ params }: { params: Params }) {
  const questionDetail = await getQuestionById({ questionId: params.questionId });
  console.log(questionDetail);
  return <div>질문 상세</div>;
}
