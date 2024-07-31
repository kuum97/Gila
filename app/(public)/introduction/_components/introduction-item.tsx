'use client';

import ProfileTopic from '@/app/(protected)/(user)/profile/_components/profile-topic';

export default function IntroductionItem() {
  return (
    <div className="flex flex-col gap-8 mt-12">
      <div className="flex w-full gap-4 pb-4 border-b border-gray-200 mx-1flex">
        <p className="text-sm">닉네임</p>
        <p className="text-sm font-bold">닉네임 테스트</p>
      </div>
      <ProfileTopic tags={['내향', '계획적', '홀로', '액티비티']} />
      <div className="w-full pb-4 border-b border-gray-200">
        <p className="text-sm">점수</p>
      </div>
      <div className="flex w-full pb-4 border-b border-gray-200 justify-evenly">
        <div className="text-center">
          <p className="text-sm">가이드 횟수</p>
          <p className="text-sm font-bold">10</p>
        </div>
        <div className="text-center">
          <p className="text-sm">질문 횟수</p>
          <p className="text-sm font-bold">10</p>
        </div>
      </div>
    </div>
  );
}
