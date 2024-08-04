'use client';

import { Heart } from 'lucide-react';
import { useTransition } from 'react';
import { toast } from 'sonner';
import toggleFavorite from '@/app/action/favorite';
import WishlistHeartLoading from '@/app/(protected)/(user)/dashboard/wishlist/_components/wishlist-heart-loading';

interface Props {
  activityId: string;
  onRemove: () => void;
}

export default function WishlistHeartIcon({ activityId, onRemove }: Props) {
  const [isPending, startTransition] = useTransition();

  const isActivityLike = async () => {
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
    <div className="relative">
      <Heart
        size={20}
        onClick={isActivityLike}
        color="#FF4242"
        fill="#FF4242"
        className="absolute right-4 bottom-4 cursor-pointer"
      />
      <WishlistHeartLoading isPending={isPending} />
    </div>
  );
}
