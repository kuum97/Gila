import Image from 'next/image';
import React from 'react';
import { MessageCircle } from 'lucide-react';
import QuestionDetailModal from './question-detail-modal';

export default function QuestionListCard() {
  return (
    <div className="w-full border rounded-md flex justify-between items-center p-3 text-xs overflow-hidden">
      <h1 className="w-[160px] truncate">이거 글 등록 어떻게 해요????????????????</h1>
      <div className="flex items-center gap-[2px]">
        <div className="relative w-[20px] h-[20px] flex overflow-hidden rounded-full">
          <Image src="/test.png" alt="유저 이미지" layout="fill" objectFit="cover" />
        </div>
        <span className="font-bold">성재</span>
      </div>
      <div className="flex items-center gap-[2px]">
        <MessageCircle size={13} />
        <p>24</p>
      </div>
      <QuestionDetailModal />
    </div>
  );
}
