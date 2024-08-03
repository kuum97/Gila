import Link from 'next/link';
import Image from 'next/image';
import LocationCombobox from '@/app/(protected)/(main)/_components/location-combobox';
import ProfileDropdown from '@/app/(protected)/(main)/_components/profile-dropdown';

export default function NavgationWithCombobox() {
  return (
    <nav className="flex items-center justify-center px-2 py-4 bg-white border-b border-gray-300">
      <div className="w-[33%]">
        <Link href="/">
          <Image width={50} height={50} src="/GilaName.png" alt="logo-to-home" />
        </Link>
      </div>
      <div className="w-[33%]">
        <LocationCombobox />
      </div>
      <div className="w-[33%] flex justify-end">
        <ProfileDropdown />
      </div>
    </nav>
  );
}
