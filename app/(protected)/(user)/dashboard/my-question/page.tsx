import MyQuestionCard from '@/app/(protected)/(user)/dashboard/my-question/_components/my-question-card';
import PlusButton from '../_components/plus-button';

export default function Page() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <h1 className="text-lg font-bold">내 질문</h1>
        <MyQuestionCard />
        <MyQuestionCard />
        <MyQuestionCard />
        <MyQuestionCard />
        <MyQuestionCard />
      </div>
      <PlusButton />
    </>
  );
}
