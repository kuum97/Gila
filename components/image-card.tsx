'use client';

import Image from 'next/image';

import React, { ReactNode } from 'react';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';

interface Props {
  activityId: string;
  title: string;
  date: string;
  participants?: number;
  extraContent?: ReactNode;
  bottomContent?: ReactNode;
  topContent?: ReactNode;
  imageSrc?: string;
  isPending?: boolean;
}

export default function ImageCard({
  activityId,
  title,
  date,
  participants,
  extraContent,
  bottomContent,
  imageSrc = '/test.png',
  isPending,
  topContent,
}: Props) {
  return (
    <Link href={`/${activityId}`} className="relative">
      <div className="w-full border p-3 rounded-lg flex gap-6 relative shadow-md">
        {isPending && (
          <div
            className="absolute inset-0 bg-black/50 rounded-md z-10 cursor-not-allowed flex justify-center items-center"
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              e.preventDefault();
            }}
          >
            <Loader2 className="animate-spin h-8 w-8" />
          </div>
        )}
        {topContent}
        <div className="w-[110px] h-[110px] relative rounded-lg overflow-hidden flex-shrink-0">
          <Image src={imageSrc} alt="썸네일" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="flex flex-col justify-center gap-2 w-full overflow-hidden">
          <h1 className="text-sm font-bold truncate w-full">{title}</h1>
          <div className="text-xs flex flex-col gap-[3px]">
            <p>{date}</p>
            <div className="flex gap-3 items-center">
              {extraContent}
              {extraContent && <span>•</span>}
              {participants && <p className="text-sm font-bold">{participants} 명</p>}
            </div>
          </div>
          {bottomContent}
        </div>
      </div>
    </Link>
  );
}
