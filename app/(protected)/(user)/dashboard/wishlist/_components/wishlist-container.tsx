'use client';

import { useState, useCallback, useEffect, useTransition } from 'react';
import WishListCard from '@/app/(protected)/(user)/dashboard/wishlist/_components/wishlist-card';
import { getMyFavorites } from '@/app/data/favorite';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import Spinner from '@/components/ui/spinner';
import { FavoriteWithActivity } from '@/type';

interface Props {
  initialFavorites: FavoriteWithActivity[];
  initialCursorId: string | null;
}

export default function WishListContainer({ initialFavorites, initialCursorId }: Props) {
  const [favorites, setFavorites] = useState<FavoriteWithActivity[]>(initialFavorites);
  const [cursorId, setCursorId] = useState<string | null>(initialCursorId);
  const [isPending, startTransition] = useTransition();

  const loadMoreFavorites = useCallback(async () => {
    if (!cursorId) return;
    startTransition(async () => {
      const result = await getMyFavorites({ cursor: cursorId, take: 10 });
      setFavorites((prev) => [...prev, ...result.favorites]);
      setCursorId(result.cursorId);
    });
  }, [cursorId]);

  const observer = useInfiniteScroll({
    callback: loadMoreFavorites,
    isLoading: isPending,
    cursorId,
  });

  const handleRemoveFavorite = (activityId: string) => {
    setFavorites((prev) => prev.filter((fav) => fav.activity.id !== activityId));
  };

  useEffect(() => {
    setFavorites(initialFavorites);
    setCursorId(initialCursorId);
  }, [initialFavorites, initialCursorId]);

  return (
    <div>
      <WishListCard favorites={favorites} onRemoveFavorite={handleRemoveFavorite} />
      {isPending && <Spinner />}
      <div ref={observer} />
    </div>
  );
}
