'use client';

import toggleFavorite from '@/app/action/favorite';
import { TAGS } from '@/constants/tag';
import { Heart, Eye } from 'lucide-react';
import { toast } from 'sonner';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { increaseActivityCount } from '@/app/action/activity';
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
  const [favorite, setFavorite] = useState(isFavorite);
  const [viewCount, setViewCount] = useState(views);
  const [likeCount, setLikeCount] = useState(likes);
  const getTagColor = (item: string) => {
    const tagInfo = TAGS.find((tagItem) => tagItem.tag.includes(item));
    return tagInfo ? tagInfo.color : '#FFB800';
  };

  const toggleActivityLike = async () => {
    setFavorite(!favorite);
    if (favorite) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    const result = await toggleFavorite(activityId);
    toast.message(result.message);
  };

  const start = format(startDate, 'yyyy.MM.dd');
  const end = format(endDate, 'yyyy.MM.dd');

  useEffect(() => {
    const action = async () => {
      const result = await increaseActivityCount(activityId);
      if (result.success) {
        setViewCount(viewCount + 1);
      }
    };
    action();
  }, [activityId, viewCount]);

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
          <div onClick={toggleActivityLike}>
            {favorite ? <Heart size={20} color="#FF4242" fill="#FF4242" /> : <Heart size={20} />}
          </div>
          <SharePopover activityId={activityId} />
        </div>
      </div>
      <h1 className="mt-1 text-2xl font-bold leading-normal">{title}</h1>
      <div className="flex items-center gap-3 my-2">
        <div className="flex gap-4">
          <div className="flex items-center gap-1">
            <Heart size={20} />
            <p className="ml-1 text-xs font-normal leading-relaxed">{likeCount}</p>
          </div>
          <div className="flex items-center gap-1">
            <Eye width={20} />
            <p className="text-xs">{viewCount}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center mx-0">
        <p className="text-xs">
          <span className="text-[#949694] mr-1">기간</span> {start} ~ {end}
        </p>
      </div>
    </div>
  );
}
