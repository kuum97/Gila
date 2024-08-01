import { Heart } from 'lucide-react';
import ImageCard from '@/components/image-card';
import DropdownKebab from '@/components/dropdown-kebab';
import { formatDateRange } from '@/utils/formatDateRange';

interface Props {
  title: string;
  views: number;
  maximumCount: number;
  startDate: Date;
  endDate: Date;
}

export default function MyActivityCard({ title, views, maximumCount, startDate, endDate }: Props) {
  const dateRange = formatDateRange(startDate, endDate);
  return (
    <ImageCard
      title={title}
      date={dateRange}
      participants={maximumCount}
      topContent={
        <div className="absolute top-1 right-1">
          <DropdownKebab />
        </div>
      }
      bottomContent={
        <div className="text-xs flex gap-2 absolute bottom-3 right-3">
          <button className="flex items-center gap-1" type="button">
            <Heart size={15} />4
          </button>
          <p>조회수 {views}</p>
        </div>
      }
    />
  );
}
