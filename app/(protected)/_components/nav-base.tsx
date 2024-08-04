import Link from 'next/link';
import Image from 'next/image';
import NavDropdown from '@/app/(protected)/_components/nav-dropdown';
import { getCurrentUser } from '@/app/data/user';

export default async function NavigationBase() {
  const { image } = await getCurrentUser();

  return (
    <nav className="flex items-center justify-between px-2 py-4 bg-white border-b border-gray-300">
      <div className="flex items-center justify-start">
        <Link href="/">
          <Image width={50} height={50} src="/GilaName.png" alt="logo-to-home" />
        </Link>
      </div>
      <div className="flex items-center justify-end">
        <NavDropdown userAvatar={image} />
      </div>
    </nav>
  );
}
