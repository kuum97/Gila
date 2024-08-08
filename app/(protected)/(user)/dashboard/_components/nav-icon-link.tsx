'use client';

import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface Props {
  navLabel: string;
  navHref: string;
  NavIcon: LucideIcon;
}

export default function NavIconLink({ navLabel, navHref, NavIcon }: Props) {
  const pathname = usePathname();
  const isActive = pathname === navHref;

  return (
    <Link
      href={navHref}
      className={cn(
        'flex flex-col items-center gap-2 text-xs p-3 w-20',
        isActive && 'border-t-2 bg-gray-200 bg-opacity-95 border-primary text-primary',
      )}
    >
      <NavIcon size={20} />
      <span>{navLabel}</span>
    </Link>
  );
}
