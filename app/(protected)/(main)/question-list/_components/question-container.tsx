import { QuestionSort } from '@/type';
import SortingDropdown from '@/components/sorting-dropdown';
import { QUESTIONSORTS } from '@/constants/sort';
import { getQuestions } from '@/app/data/question';
import QuestionList from './question-list';

interface Props {
  sort: QuestionSort;
  location: string;
}

export default async function QuestionContainer({ sort, location }: Props) {
  const qusetions = await getQuestions({
    take: 7,
    order: sort,
    answerTake: 5,
    location,
  });
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <h1 className="text-xl font-semibold">질문 목록</h1>
        <SortingDropdown sorts={QUESTIONSORTS} />
      </div>
      <QuestionList
        questions={qusetions.questions}
        questionCursorId={qusetions.cursorId}
        location={location}
      />
    </>
  );
}
