'use client';

import { useState, useCallback, useEffect, useTransition } from 'react';
import getMyFavorites from '@/app/data/favorite';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import Spinner from '@/components/ui/spinner';
import { FavoriteWithActivity } from '@/type';
import Link from 'next/link';
import WishlistImageCard from '@/app/(protected)/(user)/dashboard/wishlist/_components/wishlist-image-card';
import WishlistHeartIcon from '@/app/(protected)/(user)/dashboard/wishlist/_components/wishlist-heart-icon';

interface Props {
  initialFavorites: FavoriteWithActivity[];
  initialCursorId: string | null;
}

export default function WishListContainer({ initialFavorites, initialCursorId }: Props) {
  const [favorites, setFavorites] = useState<FavoriteWithActivity[]>([]);
  const [cursorId, setCursorId] = useState<string | null>(initialCursorId);
  const [isPending, startTransition] = useTransition();

  const loadMoreFavorites = useCallback(async () => {
    startTransition(async () => {
      if (!cursorId) return;
      const result = await getMyFavorites({ cursor: cursorId, take: 10 });
      setFavorites((prev) => [...prev, ...result.favorites]);
      setCursorId(result.cursorId);
    });
  }, [cursorId]);

  useEffect(() => {
    setFavorites(initialFavorites);
    setCursorId(initialCursorId);
  }, [initialFavorites, initialCursorId]);

  const observer = useInfiniteScroll({
    callback: loadMoreFavorites,
    cursorId,
    isLoading: isPending,
  });

  const handleRemoveFavorite = (activityId: string) => {
    setFavorites((prev) => prev.filter((fav) => fav.activity.id !== activityId));
  };

  if (initialFavorites.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <p>저장하신 활동이 없습니다.</p>
        <p>활동을 둘러보고 관심있는 활동을 저장해보세요!</p>
        <Link
          href="/activity-list"
          className="flex items-center justify-center px-4 py-3 font-semibold rounded-lg bg-primary text-white_light hover:bg-primary_dark"
        >
          둘러보러 가기
        </Link>
      </div>
    );
  }

  return (
    <>
      <ul className="flex flex-col w-full gap-6">
        {favorites.map(({ activity }) => (
          <li key={activity.id} className="relative">
            <Link href={`/activity/${activity.id}`} passHref>
              <WishlistImageCard
                title={activity.title}
                startDate={activity.startDate}
                endDate={activity.endDate}
                participants={activity.maximumCount}
                imageSrc={activity.thumbnails}
              />
            </Link>
            <WishlistHeartIcon
              activityId={activity.id}
              onRemove={() => handleRemoveFavorite(activity.id)}
            />
          </li>
        ))}
        <div ref={observer} />
      </ul>
      {isPending && (
        <div className="flex justify-center w-full">
          <Spinner />
        </div>
      )}
    </>
  );
}
