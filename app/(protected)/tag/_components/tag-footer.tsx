import { Button } from '@/components/ui/button';
import Progress from '@/components/ui/progress';
import Link from 'next/link';

interface Props {
  page: number;
}

export default function TagFooter({ page }: Props) {
  const processStatus = page === 1 ? 0 : page * 12;
  const lastTagPage = 7;

  return (
    <div className="flex items-center justify-center w-full gap-5 my-5">
      <Button asChild className="w-20 bg-gray_100">
        <Link href="/main">건너뛰기</Link>
      </Button>
      <Progress value={processStatus} className="w-[40%] bg-gray_100 h-1" />
      {page === lastTagPage ? (
        <Button>제출하기</Button>
      ) : (
        <Button asChild className="w-20 ">
          <Link href={`/tag?page=${page + 1}`}>다음</Link>
        </Button>
      )}
    </div>
  );
}
