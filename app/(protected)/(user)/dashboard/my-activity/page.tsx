import MyActivityCard from '@/app/(protected)/(user)/dashboard/my-activity/_components/my-activity-card';
import { Plus } from 'lucide-react';

export default function Page() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <div>내가 등록한 활동</div>
        <MyActivityCard />
        <MyActivityCard />
        <MyActivityCard />
        <MyActivityCard />
        <MyActivityCard />
        <MyActivityCard />
      </div>
      <div className="fixed bottom-0 left-0 w-full p-2 z-100">
        <button
          type="button"
          className="w-full p-2 bg-primary flex justify-center rounded-md"
          aria-label="추가하기"
        >
          <Plus className="text-white" />
        </button>
      </div>
    </>
  );
}
