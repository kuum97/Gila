import QuestionForm from '@/app/(protected)/(main)/question-list/_components/question-form';
import { getQuestions } from '@/app/data/question';
import QuestionList from './_components/question-list';

export default async function Page() {
  const qusetionList = await getQuestions({ take: 7 });

  return (
    <div className="flex flex-col items-center gap-3 p-6">
      <div className="relative flex flex-col items-center w-full gap-4">
        <h1 className="text-xl font-semibold">
          <span className="text-2xl font-bold text-primary">길라</span>에게 바로 물어보세요!
        </h1>
        <QuestionForm />
      </div>
      <div className="flex flex-col items-start w-full gap-2">
        <h2 className="font-semibold">질문 목록</h2>
        <QuestionList questionList={qusetionList.questions} />
      </div>
    </div>
  );
}
