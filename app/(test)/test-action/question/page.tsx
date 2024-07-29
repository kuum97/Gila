import Link from 'next/link';
import { getQuestions } from '@/app/data/question';
import CreateSampleQuestionButton from './_components/create-sample-question-button';

export default async function Page() {
  const questionsRes = await getQuestions({ order: 'recent' });
  const questions = questionsRes.questions;

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        <div>
          recent
          <div>question title</div>
          <div>user 전부</div>
          <div>answer count</div>
        </div>

        <CreateSampleQuestionButton />
        <div className="flex flex-col gap-y-2">
          {questions.map((question) => (
            <Link
              href={`/test-action/question/${question.id}`}
              key={question.id}
              className="bg-slate-300 p-2 rounded-md"
            >
              <div>제목 {question.title}</div>
              <div>유저닉네임 {question.user.nickname}</div>
              <div>answer 숫자 {question._count.answers}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
