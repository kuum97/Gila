import QuestionForm from '@/app/(protected)/(main)/question-list/_components/question-form';
import QuestionList from './_components/question-list';

export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <QuestionForm />
      <QuestionList />
    </div>
  );
}
