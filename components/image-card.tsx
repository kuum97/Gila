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
  imageSrc: string;
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
      <div className="relative flex w-full gap-6 p-3 border rounded-lg shadow-md">
        {isPending && (
          <div
            className="absolute inset-0 z-10 flex items-center justify-center rounded-md cursor-not-allowed bg-black/50"
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              e.preventDefault();
            }}
          >
            <Loader2 className="w-8 h-8 animate-spin" />
          </div>
        )}
        {topContent}
        <div className="w-[110px] h-[110px] relative rounded-lg overflow-hidden flex-shrink-0">
          <Image src={imageSrc} alt="썸네일" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="flex flex-col justify-center w-full gap-2 overflow-hidden">
          <h1 className="w-full text-sm font-bold truncate">{title}</h1>
          <div className="text-xs flex flex-col gap-[3px]">
            <p>{date}</p>
            <div className="flex items-center gap-3">
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
