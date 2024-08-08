import { Button } from '@/components/ui/button';
import Progress from '@/components/ui/progress';
import { TAGS } from '@/constants/tag';

interface Props {
  page: number;
  editTag: () => void;
  passTag: () => void;
}

export default function TagFooter({ page, editTag, passTag }: Props) {
  const processStatus = page * (100 / TAGS.length);
  const lastTagPage = TAGS.length;

  return (
    <div className="flex items-center justify-center w-full gap-5 my-5">
      <Button className="w-20 text-white bg-gray_100" onClick={passTag}>
        건너뛰기
      </Button>
      <Progress value={processStatus} className="w-[40%] bg-gray_100 h-1" />
      <Button className="w-20 text-white" disabled={page !== lastTagPage} onClick={editTag}>
        제출하기
      </Button>
    </div>
  );
}
