'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { DASHBOARD_ROUTES } from '@/constants/nav-routes';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SideMenuAccordion() {
  const pathname = usePathname();

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>프로필</AccordionTrigger>
        <AccordionContent>
          <Link
            href="/profile"
            className={cn(
              pathname === '/profile' && 'bg-gray-200',
              'flex items-center w-full hover:bg-gray-200 h-10 rounded-lg',
            )}
          >
            <p className={cn(pathname === '/profile' && 'text-primary', 'font-semibold p-2')}>
              내 프로필
            </p>
          </Link>
          <Link
            href="/profile/edit"
            className={cn(
              pathname === '/profile/edit' && 'bg-gray-200',
              'flex items-center w-full hover:bg-gray-200 h-10 rounded-lg',
            )}
          >
            <p className={cn(pathname === '/profile/edit' && 'text-primary', 'font-semibold p-2')}>
              내 정보 수정
            </p>
          </Link>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>대시보드</AccordionTrigger>
        <AccordionContent>
          <ul>
            {DASHBOARD_ROUTES.map((route) => (
              <li key={route.label}>
                <Link
                  href={route.href}
                  className={cn(
                    pathname === route.href && 'bg-gray-200',
                    'flex items-center w-full hover:bg-gray-200 h-10 rounded-lg',
                  )}
                >
                  <p className={cn(pathname === route.href && 'text-primary', 'font-semibold p-2')}>
                    {route.label}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
