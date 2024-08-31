'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { DASHBOARD_ROUTES, PROFILE_ROUTES } from '@/constants/nav-routes';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SideMenuAccordion() {
  const [accordionValue, setAccordionValue] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/profile' || pathname === '/profile/edit') {
      setAccordionValue('profile');
    } else {
      setAccordionValue('dashboard');
    }
  }, [pathname]);

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      value={accordionValue}
      onValueChange={setAccordionValue}
    >
      <AccordionItem value="profile">
        <AccordionTrigger>프로필</AccordionTrigger>
        <AccordionContent>
          <ul>
            {PROFILE_ROUTES.map((route) => (
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
      <AccordionItem value="dashboard">
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
