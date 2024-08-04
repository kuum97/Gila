'use client';

import Link from 'next/link';
import WishlistHeartIcon from '@/app/(protected)/(user)/(dashboard)/wishlist/_components/wishlist-heart-icon';
import WishlistImageCard from '@/app/(protected)/(user)/(dashboard)/wishlist/_components/wishlist-image-card';
import { FavoriteWithActivity } from '@/type';

interface Props {
  favorites: FavoriteWithActivity[];
  onRemoveFavorite: (activityId: string) => void;
}

export default function WishListCard({ favorites, onRemoveFavorite }: Props) {
  return (
    <div className="flex flex-col gap-2">
      {favorites.map(({ activity }) => (
        <div key={activity.id} className="relative">
          <Link href={`/${activity.id}`} passHref>
            <WishlistImageCard
              title={activity.title}
              startDate={activity.startDate}
              endDate={activity.endDate}
              participants={activity.maximumCount}
              cardUserId={activity.userId}
              imageSrc={activity.thumbnails}
            />
          </Link>
          <WishlistHeartIcon
            activityId={activity.id}
            onRemove={() => onRemoveFavorite(activity.id)}
          />
        </div>
      ))}
    </div>
  );
}
