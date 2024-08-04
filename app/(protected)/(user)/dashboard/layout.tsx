import React, { ReactNode } from 'react';

import DashboardNav from '@/app/(protected)/(user)/dashboard/_components/dashboard-nav';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <div className="p-5 pb-20">{children}</div>
      <DashboardNav />
    </div>
  );
}
