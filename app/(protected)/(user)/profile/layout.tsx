import { ReactNode } from 'react';
import FooterNavigation from '@/components/common/nav-footer';
import { PROFILE_ROUTES } from '@/constants/nav-routes';
import NavigationBase from '@/components/common/nav-base';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-full h-screen">
      <NavigationBase />
      {children}
      <FooterNavigation routes={PROFILE_ROUTES} />
    </div>
  );
}
