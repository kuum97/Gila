import TAGS from '@/constants/tag';
import { Heart, ExternalLink } from 'lucide-react';

export default function DetailTitle({ title, tags, likes, views }) {
  const getTagColor = (item: string) => {
    const tagInfo = TAGS.find((tagItem) => tagItem.tag.includes(item));
    return tagInfo ? tagInfo.color : '#FFB800';
  };

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-1">
          {tags.map((item: string) => (
            <span
              key={item}
              className="py-1 px-2 text-[9px] font-bold text-black rounded-3xl"
              style={{ backgroundColor: getTagColor(item) }}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Heart size={20} />
          <ExternalLink size={20} />
        </div>
      </div>

      <h1 className="mt-1 text-2xl font-bold leading-normal">{title}</h1>
      <div className="flex items-center gap-3 my-2">
        <div className="flex gap-4">
          <div className="flex gap-1">
            <Heart color="#FF4242" size={20} fill="#FF4242" />
            <p className="ml-1 text-xs font-normal leading-normal">{likes}</p>
          </div>
          <div className="flex gap-1">
            <p className="text-xs">조회수</p>
            <p className="text-xs">{views}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center mx-0">
        <p className="text-xs">
          <span className="text-[#949694] mr-1">기간</span> 2024.07.19 - 2024.07.19
        </p>
        <p className="text-xs">
          <span className="text-[#949694] mr-1">시간</span> 16:00 - 18:00
        </p>
      </div>
    </div>
  );
}
