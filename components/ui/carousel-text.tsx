import { Bookmark } from 'lucide-react';

interface Props {
  title: string;
  reviewCount: number;
}

export default function CarouselText({ title, reviewCount }: Props) {
  return (
    <div className="absolute w-full left-4 bottom-4">
      <p className="font-bold">인기 약속 BEST 5</p>
      <p>{title}</p>
      <div className="flex gap-2">
        <Bookmark />
        <p>{reviewCount}</p>
      </div>
    </div>
  );
}
