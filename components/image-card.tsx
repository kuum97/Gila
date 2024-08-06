'use client';

import Image from 'next/image';

import React, { ReactNode } from 'react';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

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
  imageSrc,
  isPending,
  topContent,
}: Props) {
  return (
    <Link href={`/${activityId}`}>
      <Card className="h-[400px] flex flex-col items-start border-none shadow-md hover:shadow-xl">
        {topContent}
        <div className="flex justify-center w-full h-full px-2 pt-2 rounded-md">
          <div className="relative w-full h-full rounded-md">
            <Image
              src={imageSrc || '/default-profile-image.png'}
              alt="thumbnail"
              fill
              sizes="(max-width: 768px) 100vw"
              style={{ objectFit: 'cover', borderRadius: '8px' }}
            />
          </div>
        </div>
        <div className="flex flex-col w-full gap-1 p-2">
          <CardHeader className="p-0">
            <CardTitle className="text-2xl font-bold text-black truncate">{title}</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-sm font-semibold text-gray-900">{date}</p>
            <div className="text-sm font-semibold text-gray-900">
              {extraContent}
              {extraContent && <span>•</span>}
              {participants && <p>약속잡은 사람들: {participants} 명</p>}
            </div>
          </CardContent>
          <CardFooter className="p-0">{bottomContent}</CardFooter>
        </div>
        {isPending && (
          <div
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              e.preventDefault();
            }}
          >
            <Loader2 className="w-8 h-8 animate-spin" />
          </div>
        )}
      </Card>
    </Link>
  );
}
