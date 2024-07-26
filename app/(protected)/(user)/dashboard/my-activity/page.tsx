import MyActivityCard from '@/app/(protected)/(user)/dashboard/my-activity/_components/my-activity-card';
import PlusButton from '../_components/plus-button';

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
      <div className="z-100">
        <PlusButton />
      </div>
    </>
  );
}
