import { toast } from 'sonner';
import { Heart } from 'lucide-react';
import { useState, useTransition } from 'react';

import ImageCard from '@/components/image-card';
import toggleFavorite from '@/app/action/favorite';

import { cn } from '@/lib/utils';
import { formatDateRange } from '@/utils/formatDateRange';
import { deleteActivity } from '@/app/action/activity';
import MyActivityKebab from './my-activity-kebab';

interface Props {
  activityId: string;
  title: string;
  views: number;
  maximumCount: number;
  startDate: Date;
  endDate: Date;
  favoriteCount: number;
  isFavorite: boolean;
}

export default function MyActivityCard({
  activityId,
  title,
  views,
  maximumCount,
  startDate,
  endDate,
  favoriteCount,
  isFavorite,
}: Props) {
  const dateRange = formatDateRange(startDate, endDate);
  const [favorite, setFavorite] = useState(isFavorite);
  const [favoCount, setFavoCount] = useState(favoriteCount);
  const [isPending, startTransition] = useTransition();

  const handleToggleFavorite = async (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    e.preventDefault();
    setFavorite((prev) => !prev);
    setFavoCount((prev) => {
      return favorite ? prev - 1 : prev + 1;
    });

    const action = await toggleFavorite(activityId);
    if (!action.success) {
      toast.error(action.message);
      setFavorite((prev) => !prev);
    }
  };

  const onDelete = () => {
    startTransition(async () => {
      const action = await deleteActivity(activityId);
      if (!action.success) {
        toast.error(action.message);
        return;
      }
      toast.success(action.message);
    });
  };

  return (
    <div className="relative">
      <ImageCard
        isPending={isPending}
        activityId={activityId}
        title={title}
        date={dateRange}
        participants={maximumCount}
        bottomContent={
          <div className="text-xs flex gap-2 absolute bottom-3 right-3">
            <button
              className="flex items-center gap-1"
              type="button"
              onClick={(e) => handleToggleFavorite(e)}
            >
              <Heart size={15} className={cn(favorite && 'text-rose-500')} />
              {favoCount}
            </button>
            <p>조회수 {views}</p>
          </div>
        }
      />
      <div className="absolute top-1 right-1">
        <MyActivityKebab handleDelete={onDelete} />
      </div>
    </div>
  );
}
