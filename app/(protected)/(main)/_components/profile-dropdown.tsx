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
      <DropdownMenuTrigger>
        <div className="flex items-center justify-center overflow-hidden border rounded-full shadow-sm w-9 h-9">
          <Image width={30} height={30} src="/GilaLogo.png" alt="user-profile" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white">
        <DropdownMenuItem
          className="flex items-center justify-center text-black hover:bg-gray-200 active:bg-gray-200"
          asChild
        >
          <Link href="/profile">내 정보</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-gray-300" />
        <DropdownMenuItem
          className="flex items-center justify-center text-black hover:bg-gray-200 active:bg-gray-200"
          asChild
        >
          <Link href="/dashboard">대시보드</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
