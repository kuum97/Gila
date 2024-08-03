import { MessageCircle } from 'lucide-react';
import React from 'react';
import MyQuestionKebab from './my-question-kebab';

export default function MyQuestionCard() {
  return (
    <div className="w-full border rounded-md flex justify-between items-center p-3 text-xs overflow-hidden ">
      <h1 className="w-[160px] truncate">이거 글 등록 어떻게 해요????????????????</h1>
      <div className="flex gap-2 items-center">
        <div className="flex items-center gap-[2px]">
          <MessageCircle size={13} />
          <p>24</p>
        </div>
        <div className="top-2 right-2 z-50">
          <MyQuestionKebab />
        </div>
      </div>
    </div>
  );
}
