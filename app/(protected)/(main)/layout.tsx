import { ReactNode } from 'react';
import NavigationBase from '@/components/common/nav-base';
import LocationSelectDrawerForNav from '@/components/location-select-drawer-nav';
import FooterNavigation from '@/components/common/nav-footer';
import { MAIN_ROUTES } from '@/constants/nav-routes';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <NavigationBase>
        <LocationSelectDrawerForNav />
      </NavigationBase>
      <div className="max-h-[calc(100vh-64px-71px)] overflow-y-scroll">{children}</div>
      <FooterNavigation routes={MAIN_ROUTES} />
    </div>
  );
}
