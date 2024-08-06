import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Lightbulb } from 'lucide-react';

export default function QuestionTipPopOver() {
  return (
    <Popover>
      <PopoverTrigger className="absolute right-3 top-3">
        <Lightbulb className="w-5 h-5" />
      </PopoverTrigger>
      <PopoverContent className="bg-white w-fit right-4">
        <p className="text-sm font-semibold">
          원하는 정보를 바로 질문해보세요!
          <br /> 길라들이 빠르게 길을 알려줄거에요!
        </p>
        <p className="text-xs font-semibold">수정과 삭제는 대시보드에서 가능합니다.</p>
        <p className="text-xs">
          ※ 주의할점: 답변이 등록된 이후에는
          <br /> 수정 및 삭제가 불가능합니다.
        </p>
      </PopoverContent>
    </Popover>
  );
}
