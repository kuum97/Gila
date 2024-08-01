import { getActivities } from '@/app/data/activity';
import MainCarousel from '@/app/(protected)/(main)/_components/main-carousel';
import ActivityContainer from '@/app/(protected)/(main)/activity-list/_components/activity-container';

type Sort = 'recent' | 'mostFavorite' | 'mostViewed';

export default async function Page({ searchParams: { sort } }: { searchParams: { sort: Sort } }) {
  const { activities } = await getActivities({ type: sort });

  return (
    <main>
      <MainCarousel />
      <ActivityContainer activities={activities} />
    </main>
  );
}
