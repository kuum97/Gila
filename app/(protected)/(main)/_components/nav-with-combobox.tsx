import LocationCombobox from '@/app/(protected)/(main)/_components/location-combobox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import Image from 'next/image';
import Link from 'next/link';

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
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex items-center justify-center overflow-hidden border rounded-full shadow-sm w-9 h-9">
              <Image width={30} height={30} src="/GilaLogo.png" alt="user-profile" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white">
            <DropdownMenuItem className="flex justify-center items-center text-black hover:bg-gray-200 active:bg-gray-200">
              내 정보
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-gray-300" />
            <DropdownMenuItem className="flex justify-center items-center text-black hover:bg-gray-200 active:bg-gray-200">
              대시보드
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
