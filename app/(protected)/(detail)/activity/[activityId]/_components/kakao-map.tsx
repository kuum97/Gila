'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */

import { useCallback, useEffect } from 'react';
import MapImg from '@/public/map.png';
import KakaoMapImg from '@/public/kakaomap.png';

declare global {
  interface Window {
    kakao: any;
  }
}

interface Props {
  address: string;
}

interface AddressSearchResult {
  address?: string;
  x: number;
  y: number;
}

type AddressSearchStatus = 'OK' | 'ZERO_RESULT' | 'ERROR';

export default function KakaoMap({ address }: Props) {
  const onLoadKakaoMap = useCallback(() => {
    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById('map');
      if (!mapContainer) return;

      const mapOption = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      const map = new window.kakao.maps.Map(mapContainer, mapOption);

      const imageSrc: string = MapImg.src;
      const imageSize = new window.kakao.maps.Size(40);
      const imageOption = { offset: new window.kakao.maps.Point(24, 48) };
      const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

      const geocoder = new window.kakao.maps.services.Geocoder();
      geocoder.addressSearch(
        address,
        (result: AddressSearchResult[], status: AddressSearchStatus) => {
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

            const marker = new window.kakao.maps.Marker({
              position: coords,
              image: markerImage,
            });

            marker.setMap(map);

            const mapLink = `https://map.kakao.com/?q=${address}`;

            const KakaoMapImgUrl = KakaoMapImg.src;

            const customOverlayContent = `
             <div style="padding:6px; font-size:10px; color:#333; background-color:white; border:1px solid #ccc; border-radius:5px; min-width: 100px;">
                <strong>위치</strong><br>
                <span style="color:#777;">${address}</span><br>
                <a href="${mapLink}" target="_blank" style="text-decoration:none; color:#333;">
                  <div style="display: flex; align-items: center; margin-top: 6px;">
                    <img src="${KakaoMapImgUrl}" alt="카카오맵 아이콘" style="width:20px; height:20px; margin-right:5px;" />
                    <p style="margin:0;">카카오 맵 ▶</p>
                  </div>
                </a>
              </div>
            `;

            const customOverlay = new window.kakao.maps.CustomOverlay({
              map,
              position: coords,
              content: customOverlayContent,
              yAnchor: 1.8,
            });

            customOverlay.setMap(map);

            map.setCenter(coords);
          }
        },
      );
    });
  }, [address]);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      onLoadKakaoMap();
    } else {
      const mapScript = document.createElement('script');
      mapScript.async = true;
      mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&autoload=false&libraries=services,clusterer,drawing`;
      document.head.appendChild(mapScript);
      mapScript.addEventListener('load', onLoadKakaoMap);

      return () => {
        mapScript.removeEventListener('load', onLoadKakaoMap);
        document.head.removeChild(mapScript);
      };
    }
  }, [address, onLoadKakaoMap]);

  return <div id="map" className="mt-1 w-full h-64 rounded-lg" />;
}
