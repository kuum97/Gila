import { getAnswers } from '@/app/data/answer';
import CreateSampleAnswerButton from './_components/create-sample-answer-button';
import { getQuestionById } from '@/app/data/question';

export default async function Page({ params }: { params: { questionId: string } }) {
  const questionId = params.questionId;

  const question = await getQuestionById(questionId);

  const answersRes = await getAnswers({ questionId });
  const answers = answersRes.answers;

  return (
    <div className="space-y-4">
      <div>
        <div>question title: {question.title}</div>
        <div>question user 작성자: {question.user.nickname} </div>
        <div>question createAt: {question.createdAt.toISOString()}</div>
        <div>answer count: {question._count.answers}</div>
        <div>question content: {question.content}</div>
      </div>
      <div>
        <div>answers</div>
      </div>
      <CreateSampleAnswerButton questionId={questionId} />
      {answers.map((answer) => (
        <div key={answer.id} className="bg-slate-300 p-3 rounded-md">
          <div>username: {answer.user.nickname}</div>
          <div>content: {answer.content}</div>
          <div>images: {answer.images}</div>
          <div>createAt: {answer.createdAt.toISOString()}</div>
        </div>
      ))}
    </div>
  );
}
