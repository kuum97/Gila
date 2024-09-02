/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { useCallback, useEffect, useState, useTransition } from 'react';
import { getActivitiesByLocation } from '@/app/data/activity';
import { ActivityWithUserAndFavoCount } from '@/type';
import ActivityCardSkeleton from '@/components/skeletons/activity-card-skeleton';
import LOCATIONS from '@/constants/locations';
import calculateDistanceInMeters from '@/utils/calculateDistance';
import ActivitySlide from './activity-slide';

export default function ActivitySlideContainer() {
  const [recommendList, setRecommentList] = useState<ActivityWithUserAndFavoCount[]>([]);
  const [userLocation, setUserLocation] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const getAddress = (mapResult: any, mapStatus: any) => {
    if (mapStatus === window.kakao.maps.services.Status.OK) {
      const replaceEmpty = mapResult[0].region_2depth_name.split(' ');
      const currentLocation = `${mapResult[0].region_1depth_name} ${replaceEmpty[0]}`;
      const { id, list } = LOCATIONS[mapResult[0].region_1depth_name];
      if (id > 10) {
        setUserLocation([currentLocation]);
        return;
      }
      let firstDistance = 0;
      let secondeDistance = 0;
      let nearByLocation;
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < list.length; i++) {
        if (mapResult[0].region_2depth_name !== list[i].state) {
          const distance = calculateDistanceInMeters(
            mapResult[0].y,
            mapResult[0].x,
            list[i].location.latitude,
            list[i].location.longitude,
          );
          secondeDistance = Number((distance / 1000).toFixed(2));
          if (!firstDistance) {
            firstDistance = secondeDistance;
          } else if (firstDistance > secondeDistance) {
            firstDistance = secondeDistance;
            nearByLocation = list[i].state;
          }
        }
      }
      const userLocationList = [
        currentLocation,
        `${mapResult[0].region_1depth_name} ${nearByLocation}`,
      ];
      setUserLocation([...userLocationList]);
    }
  };

  const onLoadKakaoMap = useCallback(() => {
    window.kakao.maps.load(() => {
      const geocoder = new window.kakao.maps.services.Geocoder();
      navigator.geolocation.getCurrentPosition((i) => {
        geocoder.coord2RegionCode(i.coords.longitude, i.coords.latitude, getAddress);
      });
    });
  }, []);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      onLoadKakaoMap();
    } else {
      const mapScript = document.createElement('script');
      mapScript.async = true;
      mapScript.src = `//dapi.Kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&autoload=false&libraries=services`;
      document.head.appendChild(mapScript);
      mapScript.addEventListener('load', onLoadKakaoMap);

      return () => {
        mapScript.removeEventListener('load', onLoadKakaoMap);
        document.head.removeChild(mapScript);
      };
    }
  }, [onLoadKakaoMap]);

  const activityByLocation = (location: string[]) => {
    startTransition(async () => {
      const result = await getActivitiesByLocation({
        location: location[0],
        secondeLocation: location[1],
        size: 5,
      });
      setRecommentList([...result.activities]);
    });
  };

  useEffect(() => {
    if (userLocation.length > 0) {
      activityByLocation(userLocation);
    }
  }, [userLocation]);

  return (
    <div className="border py-5 flex flex-col gap-5 rounded-lg">
      <div className="flex flex-col gap-1 px-5">
        <p className="text-xl font-semibold">
          나랑 가까운
          <span className="text-xl text-primary"> 길라</span>를 추천해드릴께요!
        </p>
        {!userLocation[0] && (
          <p className="text-xs">※ 위치 권한 설정을 하지 않으면 이용할 수 없는 기능입니다.</p>
        )}
      </div>
      {userLocation[0] && !isPending ? (
        <ActivitySlide recommendList={recommendList} />
      ) : (
        <div className="px-5">
          <ActivityCardSkeleton />
        </div>
      )}
    </div>
  );
}
