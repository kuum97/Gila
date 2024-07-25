import MainCarousel from '@/app/(protected)/(main)/_components/main-carousel';
import ActivityList from '@/app/(protected)/(main)/activity-list/_components/activity-list';

export default async function Page() {
  return (
    <main>
      <MainCarousel />
      <ActivityList />
    </main>
  );
}
