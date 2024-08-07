'use client';

import EditItemNickname from '@/app/(protected)/(user)/profile/edit/_components/edit-item-nickname';
import EditItemPassword from '@/app/(protected)/(user)/profile/edit/_components/edit-item-password';
import { User } from '@/type';
import EditProfileTopic from '@/app/(protected)/(user)/profile/edit/_components/edit-profile-topic';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface Props {
  userData: User;
}

export default function EditProfileItem({ userData }: Props) {
  const { email, nickname, tags } = userData;

  return (
    <Card className="flex flex-col gap-3">
      <CardContent className="flex flex-col w-full gap-3 p-0">
        <div className="flex w-full gap-4 pb-4 border-gray-200">
          <p className="text-sm w-[51.5px] text-center">이메일</p>
          <p className="text-sm font-bold">{email}</p>
        </div>
        <Separator className="w-full bg-gray-200" />
        <div className="flex flex-col gap-8">
          <EditItemNickname value={nickname} triggerText="닉네임" />
          <EditItemPassword triggerText="비밀번호" />
        </div>
        <Separator className="w-full bg-gray-200" />
        <EditProfileTopic tags={tags} />
      </CardContent>
    </Card>
  );
}
