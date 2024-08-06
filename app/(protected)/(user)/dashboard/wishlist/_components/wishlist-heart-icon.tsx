'use client';

import { Heart } from 'lucide-react';
import { MouseEventHandler, useTransition } from 'react';
import { toast } from 'sonner';
import toggleFavorite from '@/app/action/favorite';

interface Props {
  activityId: string;
  onRemove: () => void;
}

export default function WishlistHeartIcon({ activityId, onRemove }: Props) {
  const [isPending, startTransition] = useTransition();

  const isActivityLike: MouseEventHandler = async (e) => {
    e.preventDefault();
    startTransition(async () => {
      try {
        const result = await toggleFavorite(activityId);
        toast.message(result.message);
        onRemove();
      } catch (error) {
        toast.message('error');
      }
    });
  };

  return (
    <button
      disabled={isPending}
      onClick={isActivityLike}
      aria-label="favorite-button"
      type="button"
      className="absolute right-4 bottom-4"
    >
      <Heart size={20} color="#FF4242" fill="#FF4242" />
    </button>
  );
}
