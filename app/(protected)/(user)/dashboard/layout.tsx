import { ReactNode } from 'react';
import FooterNavigation from '@/components/common/nav-footer';
import { DASHBOARD_ROUTES } from '@/constants/nav-routes';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      {children}
      <FooterNavigation routes={DASHBOARD_ROUTES} />
    </div>
  );
}
