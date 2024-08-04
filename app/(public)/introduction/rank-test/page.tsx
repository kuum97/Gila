import React from 'react';
import ProfileRank from '@/app/(public)/introduction/[introductionId]/_components/profile-rank';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-10">
      <ProfileRank rating={80} />
      <ProfileRank rating={60} />
      <ProfileRank rating={40} />
      <ProfileRank rating={20} />
      <ProfileRank rating={0} />
    </div>
  );
}
