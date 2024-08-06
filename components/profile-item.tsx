'use client';

import ProfileTopic from '@/app/(protected)/(user)/profile/_components/profile-topic';
import ProfileRank from '@/app/(public)/introduction/[introductionId]/_components/profile-rank';
import { User } from '@/type';

interface UserData {
  user: User;
  averageReviewScore: number;
  totalReviewCount: number;
  activityCount: number;
  questionCount: number;
}

interface Props {
  userData: UserData;
}

export default function ProfileItem({ userData }: Props) {
  const { user, activityCount, averageReviewScore, questionCount } = userData;
  const { nickname, tags } = user;

  return (
    <div className="flex flex-col gap-8 mt-12">
      <div className="flex w-full gap-4 pb-4 mx-1 border-b border-gray-200">
        <p className="text-sm">닉네임</p>
        <p className="text-sm font-bold">{nickname}</p>
      </div>
      <ProfileTopic tags={tags} />
      <div className="w-full pb-4 border-b border-gray-200">
        <p className="text-sm">점수</p>
        <div className="w-full flex justify-center">
          <ProfileRank rating={averageReviewScore} score="style2" />
        </div>
      </div>
      <div className="flex w-full pb-4 border-b border-gray-200 justify-evenly">
        <div className="text-center">
          <p className="text-sm">가이드 횟수</p>
          <p className="text-sm font-bold">{activityCount}</p>
        </div>
        <div className="text-center">
          <p className="text-sm">질문 횟수</p>
          <p className="text-sm font-bold">{questionCount}</p>
        </div>
      </div>
    </div>
  );
}
