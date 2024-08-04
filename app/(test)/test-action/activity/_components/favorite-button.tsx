'use client';

import toggleFavorite from '@/app/action/favorite';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Heart } from 'lucide-react';
import { useState, useTransition } from 'react';
import { toast } from 'sonner';

type Props = {
  activityId: string;
  isFavorited: boolean;
};

export default function FavoriteButton({ activityId, isFavorited }: Props) {
  const [favorite, setFavorite] = useState(isFavorited);

  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    setFavorite((prev) => !prev);
    startTransition(async () => {
      const action = await toggleFavorite(activityId);
      if (!action.success) {
        setFavorite((prev) => !prev);
        toast.error(action.message);
        return;
      }
      toast.success(action.message);
    });
  };

  return (
    <Button disabled={isPending} onClick={onClick} size={'icon'} variant={'ghost'}>
      <Heart className={cn('h-6 w-6', favorite && 'text-rose-500')} />
    </Button>
  );
}
