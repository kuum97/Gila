'use client';

import { logout } from '@/app/action/user';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { toast } from 'sonner';

interface Props {
  userAvatar: string | null;
}

export default function NavDropdown({ userAvatar }: Props) {
  const [isPending, startTrasition] = useTransition();
  const router = useRouter();

  const Logout = async () => {
    startTrasition(async () => {
      const action = await logout();
      if (!action.success) {
        toast.error(action.message);
        return;
      }
      toast.success(action.message);
      router.refresh();
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center bg-[#ffffff] justify-center overflow-hidden border rounded-full shadow-sm w-9 h-9">
          <Image width={30} height={30} src={userAvatar || '/GilaLogo.png'} alt="user-avatar" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#ffffff]">
        <DropdownMenuItem className="flex items-center justify-center text-black hover:bg-gray-200 active:bg-gray-200">
          <Link href="/profile">내 정보</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-gray-300" />
        <DropdownMenuItem className="flex items-center justify-center text-black hover:bg-gray-200 active:bg-gray-200">
          <Link href="/dashboard/my-activity">대시보드</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-gray-300" />
        <DropdownMenuItem className="flex items-center justify-center text-black hover:bg-gray-200 active:bg-gray-200">
          <button disabled={isPending} onClick={Logout} type="button">
            로그아웃
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
