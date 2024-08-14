import { ReactNode } from 'react';
import NavigationBase from '@/components/common/nav-base';
import LocationSelectDrawerForNav from '@/components/location-select-drawer-nav';
import FooterNavigation from '@/components/common/nav-footer';
import { MAIN_ROUTES } from '@/constants/nav-routes';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-[420px]">
      <NavigationBase>
        <LocationSelectDrawerForNav />
      </NavigationBase>
      {children}
      <FooterNavigation routes={MAIN_ROUTES} />
    </div>
  );
}
