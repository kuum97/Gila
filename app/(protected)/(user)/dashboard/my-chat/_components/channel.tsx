import { ActivityWithFavoriteAndCount } from '@/type';
import formatDateRange from '@/utils/formatDateRange';
import { User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  activity: ActivityWithFavoriteAndCount;
}

export default function Channel({ activity }: Props) {
  const dateRange = formatDateRange({
    startDateString: activity.startDate,
    endDateString: activity.endDate,
  });

  return (
    <Link href={`/chat/${activity.id}`}>
      <div className="relative flex items-center w-full p-3 overflow-hidden text-xs border rounded-md gap-4">
        <div className="relative w-24 h-24">
          <Image
            src={activity.thumbnails[0] || '/default-carousel-image.png'}
            alt="썸네일"
            fill
            objectFit="cover"
            className="rounded-3xl"
          />
        </div>
        <div className="flex flex-col justify-center gap-3">
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-semibold truncate max-w-48">{activity.title}</h1>
            <div className="flex justify-center items-center gap-1">
              <User width={14} height={14} />
              <p className="text-lg text-gray_500">{activity.maximumCount}</p>
            </div>
          </div>
          <p className="text-sm text-nowrap">{dateRange}</p>
        </div>
      </div>
    </Link>
  );
}
