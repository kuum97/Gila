import PromiseListCard from '@/app/(protected)/(user)/dashboard/promise-list/_components/promise-list-card';

export default function Page() {
  return (
    <div className="flex flex-col gap-3">
      <div>내가 신청한 활동 리스트</div>
      <PromiseListCard />
      <PromiseListCard />
      <PromiseListCard />
      <PromiseListCard />
      <PromiseListCard />
    </div>
  );
}
