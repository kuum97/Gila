'use client';

import { Accordion } from '@/components/ui/accordion';
import { z } from 'zod';
import ProfileAccordionItem from './profile-accordion-item';
import ProfileTopic from '../../_components/profile-topic';

const nicknameSchema = z.object({
  nickname: z.string().min(1, { message: '닉네임을 입력해 주세요.' }),
});

const passwordSchema = z.object({
  password: z.string().min(1, { message: '비밀번호를 입력해 주세요.' }),
});

export default function EditProfileItem() {
  const onSubmitNickname = () => {
    console.log('테스트입니다.');
  };

  const onSubmitPassword = () => {
    console.log('테스트입니다.');
  };

  return (
    <div className="flex flex-col gap-8 mt-8">
      <div className="flex w-full gap-4 pb-4 mx-1 border-b border-gray-200">
        <p className="text-sm">이메일</p>
        <p className="text-sm font-bold">test@test.com</p>
      </div>
      <Accordion type="single" collapsible className="flex flex-col gap-8">
        <ProfileAccordionItem
          value="nickname"
          triggerText="닉네임"
          displayText="닉네임 테스트"
          schema={nicknameSchema}
          defaultValues={{ nickname: '' }}
          name="nickname"
          label="닉네임"
          placeholder="닉네임을 입력해 주세요"
          type="text"
          onSubmit={onSubmitNickname}
        />
        <ProfileAccordionItem
          value="password"
          triggerText="비밀번호"
          displayText="test0444"
          schema={passwordSchema}
          defaultValues={{ password: '' }}
          name="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해 주세요"
          type="password"
          onSubmit={onSubmitPassword}
        />
      </Accordion>
      <ProfileTopic tags={['내향', '계획적', '홀로', '액티비티']} edit={true} />
    </div>
  );
}
