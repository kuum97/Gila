import { ReactNode } from 'react';
import NavigationBase from '@/app/(protected)/_components/nav-base';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <NavigationBase />
      {children}
    </div>
  );
}
