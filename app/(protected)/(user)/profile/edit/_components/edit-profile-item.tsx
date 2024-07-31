'use client';

import { Accordion } from '@/components/ui/accordion';
import { z } from 'zod';
import { useState } from 'react';
import ProfileAccordionItem from './profile-accordion-item';
import ProfileTopic from '../../_components/profile-topic';

export default function EditProfileItem() {
  const [editNickname, setEditNickname] = useState('닉네임 테스트');
  const [editPassword, setEditPassword] = useState('test0444');

  const nicknameSchema = z.object({
    nickname: z.string().min(1, { message: '닉네임을 입력해 주세요.' }),
  });

  const passwordSchema = z.object({
    password: z.string().min(1, { message: '비밀번호를 입력해 주세요.' }),
  });

  const onSubmitNickname = (values: z.infer<typeof nicknameSchema>) => {
    console.log(values);
    setEditNickname(values.nickname);
  };

  const onSubmitPassword = (values: z.infer<typeof passwordSchema>) => {
    console.log(values);
    setEditPassword(values.password);
  };

  return (
    <div className="flex flex-col gap-8 mt-12">
      <div className="flex w-full gap-4 pb-4 mx-1 border-b border-gray-200">
        <p className="text-sm">이메일</p>
        <p className="text-sm font-bold">test@test.com</p>
      </div>
      <Accordion type="single" collapsible className="flex flex-col gap-8">
        <ProfileAccordionItem
          value="nickname"
          triggerText="닉네임"
          displayText={editNickname}
          schema={nicknameSchema}
          defaultValues={{ nickname: '' }}
          name="nickname"
          label="닉네임"
          placeholder="닉네임을 입력해 주세요"
          type="text"
          onSubmit={onSubmitNickname}
          setValue={setEditNickname}
        />
        <ProfileAccordionItem
          value="password"
          triggerText="비밀번호"
          displayText={editPassword}
          schema={passwordSchema}
          defaultValues={{ password: '' }}
          name="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해 주세요"
          type="password"
          onSubmit={onSubmitPassword}
          setValue={setEditPassword}
        />
      </Accordion>
      <ProfileTopic tags={['내향', '계획적', '홀로', '액티비티']} edit={true} />
    </div>
  );
}
