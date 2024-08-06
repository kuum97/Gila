import { toast } from 'sonner';
import { Heart } from 'lucide-react';
import { MouseEventHandler, useState, useTransition } from 'react';
import ImageCard from '@/components/image-card';
import formatDateRange from '@/utils/formatDateRange';
import { deleteActivity } from '@/app/action/activity';
import { ActivityWithFavoriteAndCount } from '@/type';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import ActivityEditForm from './activity-edit-form';

interface Props {
  activity: ActivityWithFavoriteAndCount;
}

export default function MyActivityCard({ activity }: Props) {
  const { id, title, views, maximumCount, startDate, endDate, _count, thumbnails } = activity;
  const dateRange = formatDateRange({ startDateString: startDate, endDateString: endDate });
  const [isPending, startTransition] = useTransition();
  const [isEditModalOpen, setEditModalOpen] = useState<boolean>(false);

  const handleClickEditFormOpen: MouseEventHandler = (e) => {
    e.preventDefault();

    setEditModalOpen(true);
  };

  const handleDelete: MouseEventHandler = (e) => {
    e.preventDefault();

    // eslint-disable-next-line no-restricted-globals, no-alert
    const isConfirmed = confirm('정말로 삭제하시겠습니까?');
    if (!isConfirmed) {
      return;
    }

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
    <>
      <div className="relative">
        <ImageCard
          imageSrc={thumbnails[0]}
          isPending={isPending}
          activityId={id}
          title={title}
          middleContent={
            <>
              <p className="text-sm font-semibold text-gray-900">{dateRange}</p>
              <div className="text-sm font-semibold text-gray-900">
                <p>최대 인원: {maximumCount} 명</p>
              </div>
            </>
          }
          bottomContent={
            <div className="flex flex-col w-full gap-1">
              <div className="flex items-center justify-end w-full gap-2 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Heart size={15} className="text-red" />
                  {_count.favorites}
                </div>
                <p>조회수 {views}</p>
              </div>
              <div className="flex w-full gap-2">
                <Button
                  disabled={isPending}
                  type="button"
                  className="w-full text-base font-medium text-white shadow"
                  onClick={handleClickEditFormOpen}
                >
                  수정
                </Button>
                <Button
                  disabled={isPending}
                  type="button"
                  className="w-full text-base font-medium text-white shadow bg-red hover:bg-rose-800"
                  onClick={handleDelete}
                >
                  삭제
                </Button>
              </div>
            </div>
          }
        />
      </div>
      <Dialog open={isEditModalOpen} onOpenChange={setEditModalOpen}>
        <DialogContent className="h-screen overflow-y-auto bg-white">
          <DialogTitle className="text-2xl font-semibold">길라 활동 수정</DialogTitle>
          <ActivityEditForm activity={activity} />
        </DialogContent>
      </Dialog>
    </>
  );
}
