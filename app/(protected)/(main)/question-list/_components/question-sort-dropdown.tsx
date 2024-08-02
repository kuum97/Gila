import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';

export default function QuestionSortDropdown({ sortValue }: { sortValue: string }) {
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
          <Link href="/question-list">최신순</Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          asChild
          className={`${sortValue && 'rounded-md shadow-md bg-orange-100'} w-full flex justify-center`}
        >
          <Link href="/question-list?sort=answerLen">답변순</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
