import QuestionListCard from '@/app/(protected)/(main)/question-list/_components/question-list-card';
import { QuestionWithUserAndCount } from '@/type';

export default function QuestionList({
  questionList,
}: {
  questionList: QuestionWithUserAndCount[];
}) {
  return (
    <div className="h-[450px] w-full overflow-y-auto">
      <ul className="flex flex-col items-center gap-2">
        {questionList.map((question) => (
          <li key={question.id}>
            <QuestionListCard question={question} />
          </li>
        ))}
      </ul>
    </div>
  );
}
