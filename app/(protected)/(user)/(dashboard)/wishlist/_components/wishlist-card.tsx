import { Heart } from 'lucide-react';
import ImageCard from '@/components/image-card';
import UserIcon from '@/components/user-icon';

export default function WishListCard({ testList, cursorId, user }) {
  return (
    <div>
      {testList.map(({ activity }, index) => (
        <ImageCard
          key={index}
          title={activity.title}
          startDate={activity.startDate}
          endDate={activity.endDate}
          participants={activity.maximumCount}
          extraContent={<UserIcon imageSrc={user.image} name={user.nickname} />}
          bottomContent={
            <button className="absolute bottom-3 right-3" type="button" aria-label="찜하기">
              <Heart size={20} />
            </button>
          }
        />
      ))}
    </div>
  );
}
