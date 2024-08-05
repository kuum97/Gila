import QuestionForm from '@/app/(protected)/(main)/question-list/_components/question-form';
import { getQuestions } from '@/app/data/question';
import QuestionList from '@/app/(protected)/(main)/question-list/_components/question-list';
import { getCurrentUserId } from '@/app/data/user';
import QuestionSortDropdown from '@/app/(protected)/(main)/question-list/_components/question-sort-dropdown';

export default async function Page({
  searchParams,
}: {
  searchParams: { sort: string; location: string };
}) {
  const { sort, location } = searchParams;
  const listOrder = sort ? 'answerLen' : 'recent';
  const qusetions = await getQuestions({
    take: 7,
    order: listOrder,
    answerTake: 5,
    location,
  });
  const userId = await getCurrentUserId();

  return (
    <div className="flex flex-col items-center gap-3 p-6">
      <div className="relative flex flex-col items-center w-full gap-4">
        <h1 className="text-xl font-semibold">
          <span className="text-2xl font-bold text-primary">길라</span>에게 바로 물어보세요!
        </h1>
        <QuestionForm />
      </div>
      <div className="flex flex-col items-start w-full gap-2">
        <div className="flex items-center justify-between w-full">
          <h2 className="font-semibold">질문 목록</h2>
          <QuestionSortDropdown sortValue={sort} />
        </div>
        <QuestionList
          questions={qusetions.questions}
          userId={userId}
          questionCursorId={qusetions.cursorId}
        />
      </div>
    </div>
  );
}
