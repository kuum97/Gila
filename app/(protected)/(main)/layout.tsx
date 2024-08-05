import { ReactNode } from 'react';
import NavigationWithRoute from '@/app/(protected)/(main)/_components/nav-with-route';
import NavgationWithCombobox from '@/app/(protected)/(main)/_components/nav-with-combobox';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <NavgationWithCombobox />
      <NavigationWithRoute />
      {children}
    </div>
  );
}
