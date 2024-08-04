'use client';

import Image from 'next/image';
import React, { ReactNode, useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getUserProfileWithIntroducedInfos } from '@/app/data/user';
import { formatDateRange } from '@/utils/formatDateRange';

interface Props {
  title: string;
  startDate: Date;
  endDate: Date;
  participants?: number;
  cardUserId: string;
  topContent?: ReactNode;
  bottomContent?: ReactNode;
  imageSrc?: string[];
}

export default function WishlistImageCard({
  title,
  startDate,
  endDate,
  participants,
  cardUserId,
  topContent,
  bottomContent,
  imageSrc = ['/test.png'],
}: Props) {
  const [userImage, setUserImage] = useState<string | null>(null);
  const [userName, setUserName] = useState('');
  const formatDate = formatDateRange({ startDateString: startDate, endDateString: endDate });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { user } = await getUserProfileWithIntroducedInfos(cardUserId);
        const { image, nickname } = user;
        setUserImage(image);
        setUserName(nickname);
        console.log(user);
        console.log(image, nickname);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [cardUserId]);

  return (
    <div className="relative flex w-full gap-6 p-3 border rounded-lg">
      <div className="w-[110px] h-[110px] relative rounded-lg overflow-hidden flex-shrink-0">
        <Image src={imageSrc[0]} alt="썸네일" fill style={{ objectFit: 'cover' }} />
      </div>
      <div className="flex flex-col justify-center w-full gap-2 overflow-hidden">
        <h1 className="w-full text-xl font-bold truncate">{title}</h1>
        <div className="flex flex-col gap-2 text-xs">
          <p>{formatDate}</p>
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <Avatar className="mr-2 size-6">
                <AvatarImage src={userImage || '/test.png'} />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <span className="font-medium text-black">{userName}</span>
            </div>
            <span>•</span>
            {participants && <p className="text-sm font-bold">{participants} 명</p>}
          </div>
        </div>
        {bottomContent && <div>{bottomContent}</div>}
      </div>
      {topContent && <div className="absolute top-0 right-0">{topContent}</div>}
    </div>
  );
}
