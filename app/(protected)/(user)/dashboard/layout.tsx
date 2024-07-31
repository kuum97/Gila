import React, { ReactNode } from 'react';
import DashboardNav from './_components/dashboard-nav';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <DashboardNav />
      <div className="p-5">{children}</div>
    </div>
  );
}
