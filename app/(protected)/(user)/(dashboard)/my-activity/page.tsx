import MyActivityCard from '@/app/(protected)/(user)/(dashboard)/my-activity/_components/my-activity-card';
import PlusButton from '@/app/(protected)/(user)/(dashboard)/_components/plus-button';

export default function Page() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <h1 className="text-lg font-bold">내가 등록한 활동</h1>
        <MyActivityCard />
        <MyActivityCard />
        <MyActivityCard />
        <MyActivityCard />
        <MyActivityCard />
        <MyActivityCard />
      </div>
      <div className="z-100">
        <PlusButton />
      </div>
    </>
  );
}
