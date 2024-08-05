'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useState } from 'react';
import AnswerButtonContainer from '@/app/(protected)/(main)/question-list/_components/answer-button-container';
import AnswerEditForm from '@/app/(protected)/(main)/question-list/_components/answer-edit-form';
import { AnswerWithUser } from '@/type';
import calculateDate from '@/utils/calculateData';
import Image from 'next/image';
import Link from 'next/link';

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
    <div className="flex flex-col gap-2 p-3 border rounded-md">
      <div className="flex items-center gap-2">
        <Link href={`/introduction/${answer.userId}`} className="flex items-center gap-2 h-fit">
          <Avatar className="w-7 h-7">
            <AvatarImage
              src={answer.user.image ? answer.user.image : '/test.png'}
              className="object-cover rounded-full w-7 h-7"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-sm">{answer.user.nickname}</p>
        </Link>
        <p className="text-[10px] text-nowrap w-10 text-center text-gray_500">{`${createaAt.time}${createaAt.result}전`}</p>
        {userId === answer.userId && !isEdit && (
          <AnswerButtonContainer answerId={answer.id} handleEditAnswer={handleEditAnswer} />
        )}
      </div>
      <div className="flex flex-col gap-2">
        {answer.images[0] && !isEdit && (
          <div className="relative w-full h-72">
            <Image
              src={answer.images[0]}
              alt="답변 이미지"
              fill
              className="object-cover rounded-md"
            />
          </div>
        )}
        {isEdit ? (
          <AnswerEditForm
            answerId={answer.id}
            defaultValue={answer}
            handleEditAnswer={handleEditAnswer}
          />
        ) : (
          <p className="w-full text-sm break-words">{answer.content}</p>
        )}
      </div>
    </div>
  );
}
