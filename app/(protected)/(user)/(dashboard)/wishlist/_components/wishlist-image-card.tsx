'use client';

import Image from 'next/image';
import React, { ReactNode } from 'react';

interface Props {
  title: string;
  startDate: Date;
  endDate: Date;
  participants?: number;
  topContent?: ReactNode;
  bottomContent?: ReactNode;
  imageSrc?: string[];
}

export default function WishlistImageCard({
  title,
  startDate,
  endDate,
  participants,
  topContent,
  bottomContent,
  imageSrc,
}: Props) {
  const imgSrc = imageSrc && imageSrc.length > 0 ? imageSrc[0] : '/test.png';

  return (
    <div className="relative flex w-full gap-6 p-3 border rounded-lg">
      <div className="w-[110px] h-[110px] relative rounded-lg overflow-hidden flex-shrink-0">
        <Image src={imgSrc} alt="썸네일" fill style={{ objectFit: 'cover' }} />
      </div>
      <div className="flex flex-col justify-center w-full gap-2 overflow-hidden">
        <h1 className="w-full text-xl font-bold truncate">{title}</h1>
        <div className="flex flex-col gap-2 text-xs">
          <p>{formatDate}</p>
          <div className="flex items-center gap-3">
            {participants && <p className="text-sm font-bold">{participants} 명</p>}
          </div>
        </div>
        {bottomContent && <div>{bottomContent}</div>}
      </div>
      {topContent && <div className="absolute top-0 right-0">{topContent}</div>}
    </div>
  );
}
