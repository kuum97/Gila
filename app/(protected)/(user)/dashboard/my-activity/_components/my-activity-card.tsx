import { toast } from 'sonner';
import { Heart } from 'lucide-react';
import { useTransition } from 'react';

import ImageCard from '@/components/image-card';

import formatDateRange from '@/utils/formatDateRange';
import { deleteActivity } from '@/app/action/activity';
import MyActivityKebab from '@/app/(protected)/(user)/dashboard/my-activity/_components/my-activity-kebab';
import { ActivityWithFavoriteAndCount } from '@/type';

interface Props {
  activity: ActivityWithFavoriteAndCount;
}

export default function MyActivityCard({ activity }: Props) {
  const { id, title, views, maximumCount, startDate, endDate, _count, thumbnails } = activity;
  const dateRange = formatDateRange({ startDateString: startDate, endDateString: endDate });
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    startTransition(async () => {
      const action = await deleteActivity(id);
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
        imageSrc={thumbnails[0]}
        isPending={isPending}
        activityId={id}
        title={title}
        date={dateRange}
        participants={maximumCount}
        bottomContent={
          <div className="absolute flex gap-2 text-xs bottom-3 right-3">
            <div className="flex items-center gap-1">
              <Heart size={15} className="text-rose-500" />
              {_count.favorites}
            </div>
            <p>조회수 {views}</p>
          </div>
        }
      />
      <div className="absolute top-1 right-1">
        <MyActivityKebab handleDelete={handleDelete} activity={activity} />
      </div>
    </div>
  );
}
