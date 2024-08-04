'use client';

import { CheckCircle, Clipboard, Edit, Heart, HelpCircle, Star, LucideIcon } from 'lucide-react';
import React from 'react';
import NavIconLink from '@/app/(protected)/(user)/dashboard/_components/nav-icon-link';

interface Route {
  icon: LucideIcon;
  label: string;
  href: string;
}

const dashboardPrefix = '/dashboard';

const routes: Route[] = [
  { icon: Edit, label: '등록한 활동', href: `${dashboardPrefix}/my-activity` },
  { icon: Clipboard, label: '신청한 활동', href: `${dashboardPrefix}/promise-list` },
  { icon: CheckCircle, label: '신청 현황', href: `${dashboardPrefix}/promised-list` },
  { icon: Heart, label: '찜 목록', href: `${dashboardPrefix}/wishlist` },
  { icon: HelpCircle, label: '내 질문', href: `${dashboardPrefix}/my-question` },
  { icon: Star, label: '리뷰', href: `${dashboardPrefix}/reviews` },
];

export default function DashboardNav() {
  return (
    <div className="flex overflow-x-auto bg-white border-b border-gray-300 whitespace-nowrap">
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
    </div>
  );
}
