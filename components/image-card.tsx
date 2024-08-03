import Image from 'next/image';
import React, { ReactNode } from 'react';

interface Props {
  title: string;
  startDate: Date;
  endDate: Date;
  participants?: number;
  extraContent?: ReactNode;
  topContent?: ReactNode;
  bottomContent?: ReactNode;
  imageSrc?: string;
}

export default function ImageCard({
  title,
  startDate,
  endDate,
  participants,
  extraContent,
  topContent,
  bottomContent,
  imageSrc = '/test.png',
}: Props) {
  return (
    <div className="relative flex w-full gap-6 p-3 border rounded-lg">
      <div className="w-[110px] h-[110px] relative rounded-lg overflow-hidden flex-shrink-0">
        <Image src={imageSrc} alt="썸네일" fill style={{ objectFit: 'cover' }} />
      </div>
      <div className="flex flex-col justify-center w-full gap-2 overflow-hidden">
        <h1 className="w-full text-sm font-bold truncate">{title}</h1>
        <div className="text-xs flex flex-col gap-[1px]">
          <p>
            {startDate.getDate().toString()} ~ {endDate.getDate().toString()}
          </p>
          <div className="flex items-center gap-3">
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
