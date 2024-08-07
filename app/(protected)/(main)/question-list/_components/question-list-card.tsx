/* eslint-disable no-underscore-dangle */
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { QuestionWithUserAndAnswers } from '@/type';
import calculateDate from '@/utils/calculateData';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

interface Props {
  questionItem: QuestionWithUserAndAnswers & { answerCursorId: string | null };
}

export default function QuestionListCard({ questionItem }: Props) {
  const { createdAt, id, title, location, _count, user } = questionItem;
  const calculatedCreateaAt = calculateDate(createdAt);
  return (
    <Link href={`/question/${id}`}>
      <Card className="flex flex-col items-start w-full p-0 overflow-hidden border border-gray-200 rounded-md shadow-md hover:shadow-lg">
        <CardHeader className="flex flex-col w-full gap-1 px-2 py-3">
          <CardTitle className="w-full text-2xl font-semibold truncate">{title}</CardTitle>
          <div className="flex items-center gap-1">
            <div className="relative w-6 h-6 overflow-hidden rounded-full">
              <Image
                src={user.image || '/default-profile-image.png'}
                fill
                alt="profile-image"
                sizes="(max-width: 768px) 100vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <span className="text-sm font-medium">{user.nickname}</span>
          </div>
        </CardHeader>
        <CardContent className="flex items-center justify-between w-full p-2 pr-3 text-sm border-t">
          <div className="flex items-center w-full gap-3">
            <p className="font-medium text-nowrap">{location}</p>
            <p className="text-xs text-center text-nowrap text-gray_500">{`${calculatedCreateaAt.time}${calculatedCreateaAt.result}전`}</p>
          </div>
          <div className="flex items-center font-medium gap-[2px]">
            <MessageCircle size={13} />
            <p className="w-4 text-center">{_count.answers}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
