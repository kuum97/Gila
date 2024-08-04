import React, { ReactNode } from 'react';
import DashboardNav from '@/app/(protected)/(user)/dashboard/_components/dashboard-nav';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <DashboardNav />
      <div className="min-h-screen p-5 pb-20">{children}</div>
    </div>
  );
}
