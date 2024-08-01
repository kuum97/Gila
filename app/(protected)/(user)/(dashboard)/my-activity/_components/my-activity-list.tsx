import { Activity } from '@prisma/client';
import React from 'react';
import MyActivityCard from '@/app/(protected)/(user)/(dashboard)/my-activity/_components/my-activity-card';

interface Props {
  myActivities: Activity[];
  activityCursorId?: string | null;
}

export default function MyActivityList({ myActivities, activityCursorId }: Props) {
  return (
    <>
      {myActivities.map((myActivity) => (
        <li key={myActivity.id}>
          <MyActivityCard
            title={myActivity.title}
            views={myActivity.views}
            maximumCount={myActivity.maximumCount}
            startDate={myActivity.startDate}
            endDate={myActivity.endDate}
          />
        </li>
      ))}
    </>
  );
}
