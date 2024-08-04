import { getActivities } from '@/app/data/activity';
import MainCarousel from '@/app/(protected)/(main)/_components/main-carousel';
import ActivityContainer from '@/app/(protected)/(main)/activity-list/_components/activity-container';
import { Suspense } from 'react';

export type Sort = 'recent' | 'mostFavorite' | 'mostViewed';

export default async function Page({
  searchParams: { sort, location },
}: {
  searchParams: { sort: Sort; location: string };
}) {
  const { activities, cursorId } = await getActivities({ type: sort, location });

  return (
    <main>
      <Suspense>
        <MainCarousel />
      </Suspense>
      <Suspense>
        <ActivityContainer activities={activities} cursorId={cursorId} sort={sort} />
      </Suspense>
    </main>
  );
}
