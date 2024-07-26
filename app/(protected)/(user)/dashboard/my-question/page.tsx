import MyQuestionCard from '@/app/(protected)/(user)/dashboard/my-question/_components/my-question-card';
import PlusButton from '../_components/plus-button';

export default function Page() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <div>내가 한 질문</div>
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
