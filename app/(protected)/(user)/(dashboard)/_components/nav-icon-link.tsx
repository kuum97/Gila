import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface Props {
  navLabel: string;
  navHref: string;
  pathname: string;
  NavIcon: LucideIcon;
}

export default function NavIconLink({ navLabel, navHref, pathname, NavIcon }: Props) {
  const isActive = pathname === navHref;

  return (
    <Link key={navLabel} href={navHref}>
      <div
        className={cn(
          'flex flex-col items-center gap-2 text-xs p-3 w-20',
          isActive && 'border-b border-primary text-primary',
        )}
      >
        <NavIcon size={20} />
        <span>{navLabel}</span>
      </div>
    </Link>
  );
}
