import ActivityCreateForm from '@/app/(protected)/(user)/dashboard/my-activity/_components/activity-create-form';
import BackButton from '@/components/common/back-button';

export default function ActivityCreate() {
  return (
    <div className="pb-20">
      <div className="flex items-center justify-between pb-5">
        <h1 className="text-2xl font-semibold">길라 활동 생성</h1>
        <BackButton />
      </div>
      <ActivityCreateForm />
    </div>
  );
}
