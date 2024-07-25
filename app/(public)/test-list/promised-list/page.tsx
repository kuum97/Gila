import PromisedListCard from './_components/promised-list-card';

export default function Page() {
  return (
    <div className="flex flex-col gap-3">
      <div>내가 만든 활동에 대한 신청 리스트</div>
      <PromisedListCard />
      <PromisedListCard />
      <PromisedListCard />
      <PromisedListCard />
      <PromisedListCard />
    </div>
  );
}
