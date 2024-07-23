'use client';

import { useTransition } from 'react';
import { signOut } from '@/auth';
import { useRouter } from 'next/navigation';
import { logout } from '@/app/action/user';
import { toast } from 'sonner';
import { Button } from './ui/button';

export default function LogoutButton() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const onClick = () => {
    startTransition(async () => {
      const action = await logout();
      if (!action.success) {
        toast.error(action.message);
        return;
      }
      toast.success(action.message);
      router.replace('/');
    });
  };

  return (
    <Button onClick={onClick} disabled={isPending}>
      로그아웃
    </Button>
  );
}
