import Image from 'next/image';
import React from 'react';

export default function ListCard() {
  return (
    <div className="w-full border p-3 rounded-lg flex gap-6">
      <div className="w-[170px] h-[170px] relative rounded-lg overflow-hidden flex-shrink-0">
        <Image src="/test.png" alt="썸네일" layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col justify-center gap-2 w-full">
        <h1 className="text-lg font-bold">함께 배우는 즐거운 스트릿 댄스</h1>
        <div className="text-sm flex flex-col gap-[2px]">
          <p>gila info</p>
          <p>2024-07-19 ~ 2024-07-19</p>
          <p>16 : 00 ~ 18 : 00</p>
          <p>서울 중구 청계천로</p>
        </div>
        <div className="text-sm flex gap-3 justify-end">
          <p>찜 4</p>
          <p>조회수 14</p>
        </div>
      </div>
    </div>
  );
}
