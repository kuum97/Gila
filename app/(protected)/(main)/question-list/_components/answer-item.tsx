'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useState } from 'react';
import AnswerButtonContainer from '@/app/(protected)/(main)/question-list/_components/answer-button-container';
import AnswerEditForm from '@/app/(protected)/(main)/question-list/_components/answer-edit-form';
import { AnswerWithUser } from '@/type';
import calculateDate from '@/utils/calculateData';

interface Props {
  answer: AnswerWithUser;
  userId: string;
}

export default function AnswerItem({ answer, userId }: Props) {
  const [isEdit, setIsEdit] = useState(false);
  const createaAt = calculateDate(answer.createdAt);

  const handleEditAnswer = () => {
    setIsEdit(!isEdit);
  };

  return (
    <div className="flex flex-col border rounded-md p-3 gap-2">
      <div className="flex items-center gap-2">
        <Avatar className="w-7 h-7">
          <AvatarImage
            src={answer.user.image ? answer.user.image : '/test.png'}
            className="object-cover w-7 h-7 rounded-full"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="text-sm">{answer.user.nickname}</p>
        <p className="text-[10px] text-nowrap w-10 text-center text-gray_500">{`${createaAt.time}${createaAt.result}전`}</p>
        {userId === answer.userId && !isEdit && (
          <AnswerButtonContainer answerId={answer.id} handleEditAnswer={handleEditAnswer} />
        )}
      </div>
      <div className="flex flex-col gap-2">
        <div className="w-full">
          {/* {answer.images[0] && (
            <Image src={answer.images[0]} alt="답변 이미지" height={200} width={200} />
          )} */}
        </div>
        {isEdit ? (
          <AnswerEditForm
            answerId={answer.id}
            defaultValue={answer.content}
            handleEditAnswer={handleEditAnswer}
          />
        ) : (
          <p className="text-sm">{answer.content}</p>
        )}
      </div>
    </div>
  );
}
