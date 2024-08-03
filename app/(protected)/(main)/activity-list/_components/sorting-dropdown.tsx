'use client';

import { useCallback, useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import SORTS from '@/constants/sort';

export default function SortingDropdown() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [currentSort, setCurrentSort] = useState(searchParams.get('sort'));
  const currentSortLabel = SORTS.find((sort) => sort.en === currentSort)?.ko;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  useEffect(() => {
    if (!searchParams.get('sort')) {
      const defaultSort = SORTS[0].en;
      router.push(`${pathname}?${createQueryString('sort', defaultSort)}`);
      setCurrentSort(defaultSort);
    }
  }, [createQueryString, pathname, router, searchParams]);

  const handleClickSort = ({ name, value }: { name: string; value: string }) => {
    router.push(`${pathname}?${createQueryString(name, value)}`);
    setCurrentSort(value);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button type="button" className="bg-[#ffffff] border shadow-md">
          {currentSortLabel}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#ffffff]">
        {SORTS.map((sort) => (
          <DropdownMenuItem asChild key={sort.en}>
            <button
              type="button"
              className="flex w-full items-center justify-center text-black hover:bg-gray-100 active:bg-gray-100"
              onClick={() => handleClickSort({ name: 'sort', value: sort.en })}
            >
              {sort.ko}
            </button>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
