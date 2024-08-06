'use client';

import { useCallback, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import SORTS from '@/constants/sort';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function SortingDropdown() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentSort, setCurrentSort] = useState('recent');
  const currentSortKorean = SORTS.find((sort) => sort.en === currentSort)?.ko || '최신순';

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const handleClickSort = ({ name, value }: { name: string; value: string }) => {
    router.push(`${pathname}?${createQueryString(name, value)}`);
    setCurrentSort(value);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button type="button" className="bg-[#ffffff] border flex gap-1 justify-between w-[128px]">
          <div className="w-[100px] text-base">{currentSortKorean}</div>
          <div className="w-[28px]">
            {isOpen ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#ffffff]" align="end">
        {SORTS.map((sort) => (
          <DropdownMenuItem asChild key={sort.en}>
            <button
              type="button"
              className={cn(
                currentSort === sort.en && `bg-gray-200`,
                `flex w-full items-center justify-center text-black hover:bg-gray-100`,
              )}
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
