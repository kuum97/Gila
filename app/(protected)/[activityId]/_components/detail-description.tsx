import KakaoMap from '@/app/(protected)/[activityId]/_components/kakao-map';
import { MapPin } from 'lucide-react';

export default function DetailDescription({ description, locations }) {
  return (
    <main>
      <p className="text-base font-bold text-gray-900 leading-26">설명</p>
      <p className="mt-1 text-base font-normal text-gray-800 leading-26">{description}</p>
      <div className="flex mt-8">
        <MapPin size={20} />
        <p className="ml-1 text-sm font-normal leading-normal">{locations}</p>
      </div>
      <KakaoMap address={locations} />
    </main>
  );
}
