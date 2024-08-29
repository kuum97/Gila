'use client';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import { CircleUserRound } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useTransition } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { logout } from '@/app/action/user';
import { toast } from 'sonner';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Separator } from '../ui/separator';

interface Props {
  userAvatar: string | null;
}

export default function NavSideMenu({ userAvatar }: Props) {
  const [isPending, startTrasition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();

  const Logout = async () => {
    startTrasition(async () => {
      const action = await logout();
      if (!action.success) {
        toast.error(action.message);
        return;
      }
      router.replace('/');
    });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="relative flex items-center w-[35px] h-[35px] overflow-hidden rounded-3xl bg-white_light shadow-md group transition-all hover:w-[70px] duration-300 ease-in-out">
          <div className="flex items-center gap-1 transition-transform duration-300 ease-in-out">
            <Avatar className="size-[35px]">
              <AvatarImage
                src={userAvatar || '/default-profile-image.png'}
                alt="user-avatar"
                sizes="(max-width: 768px) 100vw"
                style={{ objectFit: 'cover' }}
              />
              <AvatarFallback className="flex items-center justify-center">
                <Image
                  src="/default-profile-image.png"
                  width={35}
                  height={35}
                  alt="default-profile"
                  priority
                />
              </AvatarFallback>
            </Avatar>
          </div>
          <button
            type="button"
            className="absolute right-0 top-0 flex items-center justify-center w-[35px] h-[35px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
            aria-label="profile"
          >
            <CircleUserRound className="size-5" />
          </button>
        </div>
      </SheetTrigger>
      <SheetContent className="border-none bg-opacity-90 bg-white_light" side="left">
        <SheetTitle>메뉴</SheetTitle>
        <SheetDescription aria-describedby={undefined} />
        <div className="flex flex-col p-2 gap-2">
          <Link
            href="/profile"
            className={cn(
              pathname === '/profile' && 'bg-gray-200',
              'flex items-center justify-center w-full  hover:bg-gray-300 h-14 rounded-lg',
            )}
          >
            <p className="text-black font-semibold">프로필</p>
          </Link>
          <Separator className="bg-gray_300" />
          <button
            disabled={isPending}
            onClick={Logout}
            type="button"
            className="flex items-center justify-center w-full text-black hover:bg-gray-300 h-14 rounded-lg"
          >
            <p className="text-black font-semibold">로그아웃</p>
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
