import ActivityCardSkeleton from '@/components/skeletons/activity-card-skeleton';
import { ActivityWithUserAndFavoCount } from '@/type';
import ActivityListCard from './activity-list-card';

export default function ActivitySlide({
  recommendList,
}: {
  recommendList: ActivityWithUserAndFavoCount[];
}) {
  return (
    <div>
      {recommendList[0] ? (
        <div className="overflow-x-scroll [&::-webkit-scrollbar]:hidden h-full">
          <ul className="flex gap-4  w-fit">
            {recommendList.map((item, index) => (
              <li
                key={item.id}
                className={`w-[280px] ${index === 0 && 'ml-5'} ${recommendList.length - 1 === index && 'mr-5'}`}
              >
                <ActivityListCard activity={item} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="px-5">
          <div>
            <p className="text-xl font-semibold">근처에서 길라를 찾을 수 없어요!</p>
          </div>
          <div>
            <ActivityCardSkeleton />
          </div>
        </div>
      )}
    </div>
  );
}
