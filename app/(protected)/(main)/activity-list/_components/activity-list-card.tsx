import Image from 'next/image';
import React from 'react';
import { Heart } from 'lucide-react';
import { getUserProfileWithIntroducedInfos } from '@/app/data/user';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ActivityWithUserAndFavoCount } from '@/type';

interface Props {
  activity: ActivityWithUserAndFavoCount;
}

export default async function ActivityListCard({ activity }: Props) {
  const { title, startDate, endDate, location, views, userId, _count } = activity;
  const owner = await getUserProfileWithIntroducedInfos(userId);

  return (
    <Card>
      <Link
        href={`/${activity.id}`}
        className="flex w-full justify-center gap-3 p-1 border rounded-lg shadow-md bg-[#ffffff]"
      >
        <div className="w-[130px] h-[130px] relative rounded-lg overflow-hidden flex-shrink-0">
          <Image src="/test.png" alt="thumbnail" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="flex flex-col justify-between w-full pt-1 overflow-hidden">
          <CardHeader className="p-0">
            <CardTitle className="w-full text-xl font-bold truncate">{title}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm gap-1 flex flex-col p-0">
            <div className="flex items-center">
              <Avatar className="size-6 mr-2">
                <AvatarImage src={owner.user.image || '/test.png'} />
                <AvatarFallback>G</AvatarFallback>
              </Avatar>
              <span className="font-medium text-black">{owner.user.nickname}</span>
            </div>
            <span className="text-xs text-gray-500">
              {startDate.getDate().toString()} ~ {endDate.getDate().toString()}
            </span>
            <span className="text-xs text-gray-500">{location}</span>
          </CardContent>
          <CardFooter className="flex p-0 pr-2 justify-end gap-2 text-xs">
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
