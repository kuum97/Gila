'use client';

import ProfileTopic from '@/app/(protected)/(user)/profile/_components/profile-topic';
import EditItemNickname from '@/app/(protected)/(user)/profile/edit/_components/edit-item-nickname';
import EditItemPassword from '@/app/(protected)/(user)/profile/edit/_components/edit-item-password';
import { User } from '@/type';

interface Props {
  user: User;
}

export default function EditProfileItem({ user }) {
  const { email, nickname, password, tags } = user;

  return (
    <div className="flex flex-col gap-8 mt-12">
      <div className="flex w-full gap-4 pb-4 mx-1 border-b border-gray-200">
        <p className="text-sm">이메일</p>
        <p className="text-sm font-bold">{email}</p>
      </div>
      <div className="flex flex-col gap-8">
        <EditItemNickname value={nickname} triggerText="닉네임" />
        <EditItemPassword value={password} triggerText="비밀번호" />
      </div>
      <ProfileTopic tags={tags} edit />
    </div>
  );
}
