import { ReactNode } from 'react';
import FooterNavigation from '@/components/common/nav-footer';
import { DASHBOARD_ROUTES } from '@/constants/nav-routes';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="min-h-screen p-5">{children}</div>
      <FooterNavigation routes={DASHBOARD_ROUTES} />
    </div>
  );
}
