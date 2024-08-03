import ImageCard from '@/components/image-card';
import SmallButton from '@/components/small-button';
import UserIcon from '@/components/user-icon';

export default function PromisedListCard() {
  return (
    <ImageCard
      title="함께 배우는 즐거운 스트릿 댄스"
      date="2024-07-19 ~ 2024-07-19"
      bottomContent={
        <div className="flex text-xs items-center">
          <UserIcon imageSrc="/test.png" name="sjae" />
          <div className="flex gap-2 justify-end w-full">
            <SmallButton color="bg-green" name="수락" />
            <SmallButton color="bg-red" name="거절" />
          </div>
        </div>
      }
    />
  );
}
