import React from 'react';
import ProfileRank from '../_components/profile-rank';

export default function Page() {
  return (
    <div className="flex items-center justify-center w-full">
      <ProfileRank rating={80} />
    </div>
  );
}
