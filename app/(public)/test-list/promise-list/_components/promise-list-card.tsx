import Image from 'next/image';
import React from 'react';

export default function PromiseListCard() {
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
          <p className="text-sm font-bold">10 명</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-xs text-green">수락됨</div>
          <button type="button" className="text-xs text-white rounded-md bg-red px-2 py-1">
            취소
          </button>
        </div>
      </div>
    </div>
  );
}
