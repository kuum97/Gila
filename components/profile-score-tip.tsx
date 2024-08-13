import Image from 'next/image';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { BadgeInfo } from 'lucide-react';

export default function ProfileScoreTip() {
  return (
    <Popover>
      <PopoverTrigger>
        <BadgeInfo size={20} />
      </PopoverTrigger>
      <PopoverContent className="p-5 bg-white absolute -left-4 bottom-8 flex flex-col gap-4">
        <p className="text-[10px] font-bold">길라에서는 리뷰에 따라 점수를 올릴 수 있어요.</p>
        <Image
          src="/score-tip.png"
          alt="점수 이미지"
          width={250}
          height={50}
          className="rounded-3xl"
          objectFit="cover"
        />
      </PopoverContent>
    </Popover>
  );
}
