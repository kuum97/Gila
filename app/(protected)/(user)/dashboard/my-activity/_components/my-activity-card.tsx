import { Heart } from 'lucide-react';
import ImageCard from '@/components/image-card';
import DropdownKebab from '@/components/dropdown-kebab';

export default function MyActivityCard() {
  return (
    <ImageCard
      title="함께 배우는 즐거운 스트릿 댄스"
      date="2024-07-19 ~ 2024-07-19"
      time="16 : 00 ~ 18 : 00"
      participants={10}
      topContent={
        <div className="absolute top-1 right-1">
          <DropdownKebab />
        </div>
      }
      bottomContent={
        <div className="w-full text-xs flex gap-2 justify-end">
          <button className="flex items-center gap-1" type="button">
            <Heart size={15} />4
          </button>
          <p>조회수 14</p>
        </div>
      }
    />
  );
}
