import Image from 'next/image';
import React from 'react';
import { Heart } from 'lucide-react';

export default function ListCard() {
  return (
    <div className="w-full border p-3 rounded-lg flex gap-6">
      <div className="w-[130px] h-[130px] relative rounded-lg overflow-hidden flex-shrink-0">
        <Image src="/test.png" alt="썸네일" layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col justify-center gap-2 w-full overflow-hidden">
        <h1 className="text-sm font-bold truncate w-full">함께 배우는 즐거운 스트릿 댄스</h1>
        <div className="text-xs flex flex-col gap-[1px]">
          <p>gila info</p>
          <p>2024-07-19 ~ 2024-07-19</p>
          <p>16 : 00 ~ 18 : 00</p>
          <p>서울 중구 청계천로</p>
        </div>
        <div className="text-xs flex gap-2 justify-end">
          <button className="flex items-center" type="button">
            <Heart size={15} />
            &nbsp;4
          </button>
          <p>조회수 14</p>
        </div>
      </div>
    </div>
  );
}
