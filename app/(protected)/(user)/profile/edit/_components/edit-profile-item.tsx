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
    <Card className="flex flex-col">
      <CardContent className="flex flex-col w-full p-0">
        <div className="p-3">
          <p className="text-lg font-semibold">이메일</p>
          <p className="text-xl font-bold">{email}</p>
        </div>
        <Separator className="w-full bg-gray-200" />
        <div className="flex flex-col pl-3">
          <EditItemNickname value={nickname} triggerText="닉네임" />
        </div>
        <Separator className="w-full bg-gray-200" />
        <div className="flex flex-col pl-3">
          <EditItemPassword triggerText="비밀번호" />
        </div>
        <Separator className="w-full bg-gray-200" />
        <div className="flex flex-col pl-3">
          <EditProfileTopic tags={tags} />
        </div>
      </CardContent>
    </Card>
  );
}
