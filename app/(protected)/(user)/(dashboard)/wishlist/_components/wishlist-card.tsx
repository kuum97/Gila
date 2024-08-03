'use client';

import { useState } from 'react';
import Link from 'next/link';
import ImageCard from '@/components/image-card';
import UserIcon from '@/components/user-icon';
import WishlistHeartIcon from './wishlist-heart-icon';
import { FavoriteWithActivity } from '@/type';

interface Props {
  favorites: FavoriteWithActivity[];
  onRemoveFavorite: (activityId: string) => void;
}

export default function WishListCard({ favorites, onRemoveFavorite }: Props) {
  return (
    <div>
      {favorites.map(({ activity }) => (
        <div key={activity.id} className="relative">
          <Link href={`/${activity.id}`} passHref>
            <ImageCard
              title={activity.title}
              startDate={activity.startDate}
              endDate={activity.endDate}
              participants={activity.maximumCount}
              extraContent={<UserIcon imageSrc="/test.png" name="성재" />}
              // extraContent={<UserIcon cardUserId={activity.userId} />}
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
