'use client';

import { CheckCircle, Clipboard, Edit, Heart, HelpCircle, Star, LucideIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React from 'react';
import NavIconLink from '@/app/(protected)/(user)/(dashboard)/_components/nav-icon-link';

interface Route {
  icon: LucideIcon;
  label: string;
  href: string;
}

const routes: Route[] = [
  { icon: Edit, label: '등록한 활동', href: '/my-activity' },
  { icon: Clipboard, label: '신청한 활동', href: '/promise-list' },
  { icon: CheckCircle, label: '신청 현황', href: '/promised-list' },
  { icon: Heart, label: '찜 목록', href: '/wishlist' },
  { icon: HelpCircle, label: '내 질문', href: '/my-question' },
  { icon: Star, label: '리뷰', href: '/reviews' },
];

export default function DashboardNav() {
  const pathname = usePathname();

  return (
    <div className="overflow-x-auto whitespace-nowrap border-b border-gray-300 bg-white hide-scrollbar">
      <div className="flex">
        {routes.map((route) => {
          return (
            <NavIconLink
              key={route.label}
              navLabel={route.label}
              navHref={route.href}
              pathname={pathname}
              NavIcon={route.icon}
            />
          );
        })}
      </div>
    </div>
  );
}
