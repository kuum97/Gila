'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavigationWithRoute() {
  const pathname = usePathname();

  return (
    <section className="flex">
      <div
        className={`w-[50%] border-b py-2 flex justify-center border-gray-300 items-center ${pathname === '/activity-list' ? 'text-primary' : 'text-black'}`}
      >
        <Link href="/activity-list" className="w-full h-full text-center">
          길라찾기
        </Link>
      </div>
      <div
        className={`w-[50%] border-b py-2 flex justify-center items-center border-l border-gray-300 ${pathname === '/question-list' ? 'text-primary' : 'text-black'}`}
      >
        <Link href="/question-list" className="w-full h-full text-center">
          질문하기
        </Link>
      </div>
    </section>
  );
}
