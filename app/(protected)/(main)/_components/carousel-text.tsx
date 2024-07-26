import { Heart } from 'lucide-react';

interface Props {
  title: string;
  likes: number;
}

export default function CarouselText({ title, likes }: Props) {
  return (
    <div className="absolute w-full left-4 bottom-4">
      <p className="font-bold">인기 약속 BEST 5</p>
      <p>{title}</p>
      <div className="flex gap-2">
        <Heart />
        <p>{likes}</p>
      </div>
    </div>
  );
}
