import { Button } from '@/components/ui/button';
import Progress from '@/components/ui/progress';
import TAGS from '@/constants/tag';
import Link from 'next/link';

interface Props {
  page: number;
  tagList: string[];
}

export default function TagFooter({ page, tagList }: Props) {
  const processStatus = page * (100 / TAGS.length);
  const lastTagPage = TAGS.length;

  return (
    <div className="flex items-center justify-center w-full gap-5 my-5">
      <Button asChild className="w-20 bg-gray_100">
        <Link href="/main">건너뛰기</Link>
      </Button>
      <Progress value={processStatus} className="w-[40%] bg-gray_100 h-1" />
      <Button className="w-20" disabled={page !== lastTagPage} onClick={() => console.log(tagList)}>
        제출하기
      </Button>
    </div>
  );
}
