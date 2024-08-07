import { ReactNode } from 'react';
import NavigationBase from '@/components/common/nav-base';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative pb-20">
      <NavigationBase />
      {children}
    </div>
  );
}
