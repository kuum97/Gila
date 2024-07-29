import QuestionForm from '@/app/(protected)/(main)/question-list/_components/question-form';
import QuestionList from './_components/question-list';

export default function Page() {
  return (
    <div className="flex flex-col items-center p-6 gap-6">
      <QuestionForm />
      <div className="w-full items-start">
        <h1 className="font-semibold">질문 목록</h1>
      </div>
      <QuestionList />
    </div>
  );
}
