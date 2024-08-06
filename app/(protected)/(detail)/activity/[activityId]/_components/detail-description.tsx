import KakaoMap from '@/app/(protected)/(detail)/activity/[activityId]/_components/kakao-map';
import { MapPin } from 'lucide-react';

interface Props {
  description: string;
  locations: string;
}

export default function DetailDescription({ description, locations }: Props) {
  return (
    <div>
      <p className="text-base font-bold text-gray-900 leading-26">설명</p>
      <p className="mt-1 text-sm font-normal text-gray-800 leading-26">{description}</p>
      <div className="flex mt-8">
        <MapPin size={20} />
        <p className="ml-1 text-sm font-normal leading-normal">{locations}</p>
      </div>
      <KakaoMap address={locations} />
    </div>
  );
}
