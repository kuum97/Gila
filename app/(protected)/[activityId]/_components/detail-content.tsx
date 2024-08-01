import DetailTitle from '@/app/(protected)/[activityId]/_components/detail-title';
import DetailDescription from '@/app/(protected)/[activityId]/_components/detail-description';
import { DetailCarousel } from '@/app/(protected)/[activityId]/_components/detail-carousel';
import { ActivityWithUserAndFavorite } from '@/type';
import AuthorInfo from './author-info';

export default function DetailContent({ detail }: { detail: ActivityWithUserAndFavorite }) {
  return (
    <div>
      <DetailCarousel thumbnails={detail.thumbnails} />
      <div className="flex flex-col gap-6 m-4">
        <DetailTitle
          title={detail.title}
          tags={detail.tags}
          likes={4}
          views={detail.views}
          startDate={detail.startDate}
          endDate={detail.endDate}
        />
        <DetailDescription description={detail.description} locations={detail.location} />
        <AuthorInfo />
      </div>
    </div>
  );
}
