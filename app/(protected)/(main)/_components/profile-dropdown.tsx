import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import Link from 'next/link';

export default function ProfileDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center bg-[#ffffff] justify-center overflow-hidden border rounded-full shadow-sm w-9 h-9">
          <Image width={30} height={30} src="/GilaLogo.png" alt="user-profile" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#ffffff]">
        <DropdownMenuItem asChild>
          <Link
            href="/profile"
            className="flex items-center justify-center text-black hover:bg-gray-100 active:bg-gray-100"
          >
            내 정보
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-gray-300" />
        <DropdownMenuItem asChild>
          <Link
            href="/dashboard"
            className="flex items-center justify-center text-black hover:bg-gray-100 active:bg-gray-100"
          >
            대시보드
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
