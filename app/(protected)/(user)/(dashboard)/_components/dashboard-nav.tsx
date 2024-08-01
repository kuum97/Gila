'use client';

import { cn } from '@/lib/utils';
import { CheckCircle, Clipboard, Edit, Heart, HelpCircle, Star, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

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
          const isActive = pathname === route.href;
          return (
            <Link key={route.label} href={route.href}>
              <div
                className={cn(
                  'flex flex-col items-center gap-2 text-xs p-3 w-20',
                  isActive && 'border-b border-primary text-primary',
                )}
              >
                <route.icon size={20} />
                <span>{route.label}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
