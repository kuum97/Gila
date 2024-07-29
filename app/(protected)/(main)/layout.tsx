import { ReactNode } from 'react';
import NavgationWithCombobox from '@/app/(protected)/(main)/_components/nav-with-combobox';
import NavigationWithRoute from '@/app/(protected)/(main)/_components/nav-with-route';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <NavgationWithCombobox />
      <NavigationWithRoute />
      {children}
    </div>
  );
}
