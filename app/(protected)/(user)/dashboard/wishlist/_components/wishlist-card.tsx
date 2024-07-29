import { Heart } from 'lucide-react';
import ImageCard from '@/components/image-card';
import UserIcon from '@/components/user-icon';

export default function WishListCard() {
  return (
    <ImageCard
      title="함께 배우는 즐거운 스트릿 댄스"
      date="2024-07-19 ~ 2024-07-19"
      time="16 : 00 ~ 18 : 00"
      participants={10}
      extraContent={<UserIcon imageSrc="/test.png" name="성재" />}
      bottomContent={
        <button className="absolute bottom-3 right-3" type="button" aria-label="찜하기">
          <Heart size={20} />
        </button>
      }
    />
  );
}
