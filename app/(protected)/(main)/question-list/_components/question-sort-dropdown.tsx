'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export default function QuestionSortDropdown({ sortValue }: { sortValue: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams],
  );

  const handleSorting = ({ name, value }: { name: string; value: string }) => {
    router.push(`${pathname}?${createQueryString(name, value)}`);
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="text-xs h-fit">
          정렬
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white flex flex-col items-center">
        <DropdownMenuItem
          asChild
          className={`${!sortValue && 'rounded-md shadow-md bg-orange-100'} w-full flex justify-center`}
        >
          <button type="button" onClick={() => handleSorting({ name: 'sort', value: '' })}>
            최신순
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem
          asChild
          className={`${sortValue && 'rounded-md shadow-md bg-orange-100'} w-full flex justify-center`}
        >
          <button type="button" onClick={() => handleSorting({ name: 'sort', value: 'answerLen' })}>
            답변순
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
