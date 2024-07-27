import DetailTitle from '@/app/(protected)/[activityId]/_components/detail-title';
import DetailDescription from '@/app/(protected)/[activityId]/_components/detail-description';
import { DetailCarousel } from '@/app/(protected)/[activityId]/_components/detail-carousel';
import TestImg from '@/public/test.png';
import AuthorInfo from './author-info';

// 삭제하기
const thumbnails = [
  {
    id: 200,
    imageUrl: TestImg,
  },
  {
    id: 201,
    imageUrl: TestImg,
  },
  {
    id: 202,
    imageUrl: TestImg,
  },
  {
    id: 203,
    imageUrl: TestImg,
  },
  {
    id: 204,
    imageUrl: TestImg,
  },
];

export default function DetailContent({}) {
  return (
    <div>
      <DetailCarousel thumbnails={thumbnails} />

      <div className="flex flex-col gap-6 m-4">
        <DetailTitle
          title="맛있는 음식"
          tags={['내향', '계획적', '홀로', '액티비티']}
          likes={4}
          views={14}
          startDate={startDate}
          endDate={endDate}
        />
        <DetailDescription
          description="함께 요리하고 맛있게 먹어요"
          locations="서울특별시 종로구 세종대로 152"
        />
        <AuthorInfo />
      </div>
    </div>
  );
}
