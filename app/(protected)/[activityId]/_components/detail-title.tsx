'use client';

import { toggleFavorite } from '@/app/action/favorite';
import { TAGS } from '@/constants/tag';
import { Heart, Eye } from 'lucide-react';
import { toast } from 'sonner';
import SharePopover from './share-popover';

interface Props {
  title: string;
  tags: string[];
  likes: number;
  views: number;
  startDate: Date;
  endDate: Date;
  activityId: string;
  isFavorite: boolean;
}

// fns 설치후 날짜 수정

export default function DetailTitle({
  title,
  tags,
  likes,
  views,
  startDate,
  endDate,
  activityId,
  isFavorite,
}: Props) {
  const getTagColor = (item: string) => {
    const tagInfo = TAGS.find((tagItem) => tagItem.tag.includes(item));
    return tagInfo ? tagInfo.color : '#FFB800';
  };

  const isActivityLike = async () => {
    const result = await toggleFavorite(activityId);
    toast.message(result.message);
  };

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-1">
          {tags.map((item: string) => (
            <span
              key={item}
              className="py-1 px-2 text-[9px] font-bold text-black rounded-3xl"
              style={{ backgroundColor: getTagColor(item) }}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4">
          {isFavorite ? (
            <Heart size={20} onClick={isActivityLike} color="#FF4242" fill="#FF4242" />
          ) : (
            <Heart size={20} onClick={isActivityLike} />
          )}
          <SharePopover activityId={activityId} />
        </div>
      </div>
      <h1 className="mt-1 text-2xl font-bold leading-normal">{title}</h1>
      <div className="flex items-center gap-3 my-2">
        <div className="flex gap-4">
          <div className="flex gap-1 items-center">
            <Heart size={20} />
            <p className="ml-1 text-xs font-normal leading-relaxed">{likes}</p>
          </div>
          <div className="flex gap-1 items-center">
            <Eye width={20} />
            <p className="text-xs">{views}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center mx-0">
        <p className="text-xs">
          <span className="text-[#949694] mr-1">기간</span> 2024.07.19 - 2024.07.19
        </p>
      </div>
    </div>
  );
}
