'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ProfileLink from './profile-link';

export default function ProfileNavgationRoute() {
  const pathname = usePathname();

  return (
    <section className="flex">
      <div
        className={`w-[50%] border-b py-2 flex justify-center border-gray-300 items-center ${pathname === '/profile' ? 'text-primary' : 'text-black'}`}
      >
        <ProfileLink />
      </div>
      <div
        className={`w-[50%] border-b py-2 flex justify-center items-center border-l border-gray-300 ${pathname === '/profile/edit' ? 'text-primary' : 'text-black'}`}
      >
        <Link href="/profile/edit" className="w-full h-full text-center">
          내 정보 수정
        </Link>
      </div>
    </section>
  );
}
