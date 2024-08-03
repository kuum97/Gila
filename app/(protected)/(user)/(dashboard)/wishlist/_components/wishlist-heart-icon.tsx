'use client';

import { Heart } from 'lucide-react';
import { toast } from 'sonner';
import { toggleFavorite } from '@/app/action/favorite';

interface Props {
  activityId: string;
  onRemove: () => void;
}

export default function WishlistHeartIcon({ activityId, onRemove }: Props) {
  const isActivityLike = async () => {
    const result = await toggleFavorite(activityId);
    toast.message(result.message);
    onRemove();
  };

  return (
    <Heart
      size={20}
      onClick={isActivityLike}
      color="#FF4242"
      fill="#FF4242"
      className="absolute right-4 bottom-4"
    />
  );
}
