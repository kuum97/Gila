'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { QUESTIONSORTS } from '@/constants/sort';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';

export default function QuestionSortDropdown({ sortValue }: { sortValue: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentSort, setCurrentSort] = useState('recent');
  const currentSortKorean = QUESTIONSORTS.find((sort) => sort.en === currentSort)?.ko || '최신순';

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
    setCurrentSort(value);
  };

  return (
    <DropdownMenu modal={false} open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="text-xs h-fit flex gap-1 justify-between">
          {currentSortKorean}
          {isOpen ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white flex flex-col items-center" align="end">
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
