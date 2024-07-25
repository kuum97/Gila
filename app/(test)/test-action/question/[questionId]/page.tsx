import { getAnswers } from '@/app/data/answer';
import CreateSampleAnswerButton from './_components/create-sample-answer-button';

export default async function Page({ params }: { params: { questionId: string } }) {
  const questionId = params.questionId;

  const answersRes = await getAnswers(questionId);
  const answers = answersRes.answers;

  return (
    <div className="space-y-4">
      <CreateSampleAnswerButton questionId={questionId} />
      {answers.map((answer) => (
        <div key={answer.id} className="bg-slate-300 p-3 rounded-md">
          {answer.content}
        </div>
      ))}
    </div>
  );
}
