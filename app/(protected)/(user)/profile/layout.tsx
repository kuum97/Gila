import { ReactNode } from 'react';
import ProfileNavgationRoute from '@/app/(protected)/(user)/profile/_components/profile-nav-route';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <ProfileNavgationRoute />
      {children}
    </div>
  );
}
