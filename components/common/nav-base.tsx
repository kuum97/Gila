import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getCurrentUser } from '@/app/data/user';
import NavDropdown from '@/components/common/nav-dropdown';

export default async function NavigationBase({ children }: { children?: ReactNode }) {
  const { image } = await getCurrentUser();

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between h-16 p-3 bg-white border-b bg-opacity-95">
      <Link href="/activity-list">
        <div className="w-[70px] h-[35px] relative">
          <Image
            fill
            src="/GilaName.png"
            alt="logo-to-home"
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 768px) 100vw"
            priority
          />
        </div>
      </Link>
      {children && <div className="col-span-2">{children}</div>}
      <div className="flex items-center justify-end w-[70px]">
        <NavDropdown userAvatar={image} />
      </div>
    </nav>
  );
}
