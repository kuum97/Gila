import CarouselCard from '@/app/(protected)/(main)/_components/carousel-card';
import { getActivities } from '@/app/data/activity';

export default async function MainCarousel() {
  const { activities } = await getActivities({ type: 'mostFavorite', size: 5 });

  return <CarouselCard activities={activities} />;
}
