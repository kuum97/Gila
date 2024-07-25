import Link from 'next/link';
import { getQuestions } from '@/app/data/question';
import CreateSampleQuestionButton from './_components/create-sample-question-button';

export default async function Page() {
  const questionsRes = await getQuestions({ order: 'recent' });
  const questions = questionsRes.questions;

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        <CreateSampleQuestionButton />
        <div className="flex flex-col gap-y-2">
          {questions.map((question) => (
            <Link
              href={`/test-action/${question.id}`}
              key={question.id}
              className="bg-slate-300 p-2 rounded-md"
            >
              {question.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
