import { ReactNode } from 'react';
import ProfileNavgationRoute from './_components/profile-nav-route';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <ProfileNavgationRoute />
      {children}
    </div>
  );
}
