import PromiseListCard from '@/app/(protected)/(user)/(dashboard)/promise-list/_components/promise-list-card';

export default function Page() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-lg font-bold">내가 신청한 활동</h1>
      <PromiseListCard />
      <PromiseListCard />
      <PromiseListCard />
      <PromiseListCard />
      <PromiseListCard />
    </div>
  );
}
