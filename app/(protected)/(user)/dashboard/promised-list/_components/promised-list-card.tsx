import Image from 'next/image';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function PromisedListCard() {
  return (
    <div className="w-full border p-3 rounded-lg flex gap-6 relative">
      <div className="w-[110px] h-[110px] relative rounded-lg overflow-hidden flex-shrink-0">
        <Image src="/test.png" alt="썸네일" layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col justify-center gap-2 w-full overflow-hidden">
        <h1 className="text-sm font-bold truncate w-full">함께 배우는 즐거운 스트릿 댄스</h1>
        <div className="text-xs flex flex-col gap-[1px]">
          <p>2024-07-19 ~ 2024-07-19</p>
          <p>16 : 00 ~ 18 : 00</p>
        </div>
        <div className="flex text-xs items-center">
          <div className="flex items-center gap-1">
            <Avatar className="w-5 h-5">
              <AvatarImage src="/test.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="font-bold flex-shrink-0">성재</span>
          </div>
          <div className="flex gap-2 justify-end w-full">
            <button type="button" className="text-white rounded-md bg-green px-2 py-1">
              수락
            </button>
            <button type="button" className="text-white rounded-md bg-red px-2 py-1">
              거절
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
