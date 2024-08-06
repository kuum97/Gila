import Image from 'next/image';
import React from 'react';
import { Heart } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ActivityWithUserAndFavoCount } from '@/type';
import formatDateRange from '@/utils/formatDateRange';

interface Props {
  activity: ActivityWithUserAndFavoCount;
}

export default function ActivityListCard({ activity }: Props) {
  const { title, startDate, endDate, location, views, user, _count } = activity;
  const formatDate = formatDateRange({ startDateString: startDate, endDateString: endDate });

  return (
    <Card>
      <Link
        href={`/activity/${activity.id}`}
        className="flex w-full justify-center gap-3 p-1 border rounded-lg shadow-md bg-[#ffffff]"
      >
        <div className="w-[130px] h-[130px] relative rounded-lg overflow-hidden">
          <Image src="/test.png" alt="thumbnail" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="flex flex-col justify-between w-full pt-1 overflow-hidden">
          <CardHeader className="p-0">
            <CardTitle className="w-full text-xl font-bold truncate">{title}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-1 p-0 text-sm">
            <div className="flex items-center">
              <Avatar className="mr-2 size-6">
                <AvatarImage src={user.image || '/test.png'} />
                <AvatarFallback>G</AvatarFallback>
              </Avatar>
              <span className="font-medium text-black">{user.nickname}</span>
            </div>
            <span className="text-xs text-gray-500">{formatDate}</span>
            <span className="text-xs text-gray-500">{location}</span>
          </CardContent>
          <CardFooter className="flex justify-end gap-2 p-0 pr-2 text-xs">
            <span className="text-xs text-gray-500">조회수 {views}</span>
            <button className="flex items-center gap-1 text-xs text-gray-500" type="button">
              <Heart className="text-red" size={15} />
              {_count.favorites}
            </button>
          </CardFooter>
        </div>
      </Link>
    </Card>
  );
}
