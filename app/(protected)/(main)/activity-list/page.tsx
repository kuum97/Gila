import { Suspense } from 'react';
import { Sort } from '@/type';
import { getActivities } from '@/app/data/activity';
import MainCarousel from '@/app/(protected)/(main)/_components/main-carousel';
import ActivityContainer from '@/app/(protected)/(main)/activity-list/_components/activity-container';
import Loading from '@/app/(protected)/(main)/activity-list/loading';

export default async function Page({
  searchParams: { sort, location },
}: {
  searchParams: { sort: Sort; location: string };
}) {
  const { activities, cursorId } = await getActivities({ type: sort, location, size: 5 });

  return (
    <main>
      <Suspense fallback={<Loading />}>
        <div className="pb-8 bg-white shadow-inner border-y-2">
          <h1 className="p-4 text-xl font-semibold">현재 주목받는 길라들</h1>
          <MainCarousel />
        </div>
        <ActivityContainer activities={activities} cursorId={cursorId} sort={sort} />
      </Suspense>
    </main>
  );
}
