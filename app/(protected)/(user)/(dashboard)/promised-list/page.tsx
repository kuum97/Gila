import PromisedListCard from '@/app/(protected)/(user)/(dashboard)/promised-list/_components/promised-list-card';

export default function Page() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-lg font-bold">내 활동 신청 현황</h1>
      <PromisedListCard />
      <PromisedListCard />
      <PromisedListCard />
      <PromisedListCard />
      <PromisedListCard />
    </div>
  );
}
