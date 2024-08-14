import { ReactNode } from 'react';
import FooterNavigation from '@/components/common/nav-footer';
import { DASHBOARD_ROUTES } from '@/constants/nav-routes';
import NavigationBase from '@/components/common/nav-base';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-[400px]">
      <NavigationBase />
      {children}
      <FooterNavigation routes={DASHBOARD_ROUTES} />
    </div>
  );
}
