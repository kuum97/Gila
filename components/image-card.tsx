import Image from 'next/image';
import React, { ReactNode } from 'react';

interface Props {
  title: string;
  date: string;
  participants?: number;
  extraContent?: ReactNode;
  topContent?: ReactNode;
  bottomContent?: ReactNode;
  imageSrc?: string;
}

export default function ImageCard({
  title,
  date,
  participants,
  extraContent,
  topContent,
  bottomContent,
  imageSrc = '/test.png',
}: Props) {
  return (
    <div className="w-full border p-3 rounded-lg flex gap-6 relative">
      <div className="w-[110px] h-[110px] relative rounded-lg overflow-hidden flex-shrink-0">
        <Image src={imageSrc} alt="썸네일" layout="fill" objectFit="cover" />
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
        {bottomContent && <div>{bottomContent}</div>}
      </div>
      {topContent && <div className="absolute top-0 right-0">{topContent}</div>}
    </div>
  );
}
