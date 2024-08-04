'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavigationWithRoute() {
  const pathname = usePathname();

  return (
    <section className="flex">
      <div
        className={`w-[50%] py-2 flex justify-center border-gray-300 items-center ${pathname === '/activity-list' ? 'text-primary border-b-4 border-b-primary' : 'text-black border-b'}`}
      >
        <Link href="/activity-list" className="w-full h-full text-lg font-semibold text-center">
          길라찾기
        </Link>
      </div>
      <div
        className={`w-[50%] py-2 flex justify-center items-center border-l border-gray-300 ${pathname === '/question-list' ? 'text-primary border-b-4 border-b-primary' : 'text-black border-b'}`}
      >
        <Link href="/question-list" className="w-full h-full text-lg font-semibold text-center">
          질문하기
        </Link>
      </div>
    </section>
  );
}
