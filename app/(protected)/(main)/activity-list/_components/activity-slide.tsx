'use client';

import ActivityCardSkeleton from '@/components/skeletons/activity-card-skeleton';
import { ActivityWithUserAndFavoCount } from '@/type';
import { useCallback, useEffect, useRef, useState } from 'react';
import useThrottle from '@/hooks/useThrottle';
import ActivityListCard from './activity-list-card';
import SlideButtonContainer from './slide-button-container';

export default function ActivitySlide({
  recommendList,
}: {
  recommendList: ActivityWithUserAndFavoCount[];
}) {
  const [slideScrollDistance, setSlideScrollDistance] = useState(0);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);

  const settingSlide = useCallback(() => {
    if (slideRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = slideRef.current;
      setIsPrevDisabled(scrollLeft === 0);
      setIsNextDisabled(scrollLeft + clientWidth >= scrollWidth);
    }
  }, []);

  const nextSlide = () => {
    if (slideRef.current) {
      slideRef.current.scrollBy({ left: slideScrollDistance, behavior: 'smooth' });
    }
  };

  const throttleClickNext = useThrottle({ callback: nextSlide, limit: 300 });

  const prevSlide = () => {
    if (slideRef.current) {
      slideRef.current.scrollBy({ left: -slideScrollDistance, behavior: 'smooth' });
    }
  };

  const throttleClickPrev = useThrottle({ callback: prevSlide, limit: 300 });

  useEffect(() => {
    if (slideRef.current) {
      if (slideRef.current.firstElementChild) {
        setSlideScrollDistance(
          slideRef.current.firstElementChild.clientWidth / recommendList.length,
        );
      }
    }
  }, [recommendList]);

  useEffect(() => {
    const slide = slideRef.current;
    if (slide) {
      slide.addEventListener('scroll', settingSlide);
    }
    return () => {
      if (slide) {
        slide.removeEventListener('scroll', settingSlide);
      }
    };
  }, [settingSlide]);

  return (
    <div className="relative">
      {recommendList[1] && (
        <SlideButtonContainer
          handleNext={throttleClickNext}
          handlePrev={throttleClickPrev}
          isNextDisabled={isNextDisabled}
          isPrevDisabled={isPrevDisabled}
        />
      )}
      {recommendList[0] ? (
        <div className="overflow-x-scroll [&::-webkit-scrollbar]:hidden h-full" ref={slideRef}>
          <ul className="flex gap-4 w-fit">
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
            <p className="text-lg font-semibold">근처의 길라를 찾을 수 없어요!</p>
          </div>
          <div>
            <ActivityCardSkeleton />
          </div>
        </div>
      )}
    </div>
  );
}
