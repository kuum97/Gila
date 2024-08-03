import { Heart } from 'lucide-react';

interface Props {
  title: string;
  likes: number;
}

export default function CarouselText({ title, likes }: Props) {
  return (
    <div className="absolute bottom-0 flex justify-between w-full p-3 pt-10 text-white shadow-inner bg-gradient-to-t from-black to-transparent">
      <div>
        <p className="text-xl font-bold">
          <span className="text-3xl">길라</span> TOP5
        </p>
        <p>{title}</p>
      </div>
      <div className="flex items-end gap-2">
        <Heart className="text-red" />
        <p>{likes}</p>
      </div>
    </div>
  );
}
