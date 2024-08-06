'use client';

import React from 'react';
import NavIconLink from '@/app/(protected)/(user)/dashboard/_components/nav-icon-link';
import { Route } from '@/constants/nav-routes';

interface Props {
  routes: Route[];
}

export default function FooterNavigation({ routes }: Props) {
  return (
    <nav className="sticky bottom-0 z-50 flex items-center justify-around overflow-x-auto bg-white border-t bg-opacity-95">
      <div className="flex">
        {routes.map((route) => (
          <NavIconLink
            key={route.label}
            navLabel={route.label}
            navHref={route.href}
            NavIcon={route.icon}
          />
        ))}
      </div>
    </nav>
  );
}
