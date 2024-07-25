import MyActivityCard from '@/app/(public)/test-list/my-activity/_components/my-activity-card';

export default function Page() {
  return (
    <div className="flex flex-col gap-3">
      <div>내가 등록한 활동</div>
      <MyActivityCard />
      <MyActivityCard />
      <MyActivityCard />
      <MyActivityCard />
      <MyActivityCard />
    </div>
  );
}
