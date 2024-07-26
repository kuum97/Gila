import MyQuestionCard from '@/app/(protected)/(user)/dashboard/my-question/_components/my-question-card';
import { Plus } from 'lucide-react';

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
      <div className="fixed bottom-0 left-0 w-full p-2">
        <button
          type="button"
          className="w-full p-2 bg-primary flex justify-center rounded-md z-100"
          aria-label="추가하기"
        >
          <Plus className="text-white" />
        </button>
      </div>
    </>
  );
}
