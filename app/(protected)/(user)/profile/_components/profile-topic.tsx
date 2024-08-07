import { TAGS } from '@/constants/tag';

interface Props {
  tags: string[];
}

export default function ProfileTopic({ tags = [] }: Props) {
  const getTagColor = (item: string) => {
    const tagInfo = TAGS.find((tagItem) => tagItem.tag.includes(item));

    // 기본 색상을 '#FFB800'로 설정
    return tagInfo ? tagInfo.color : '#FFB800';
  };

  return (
    <div className="flex justify-between w-full">
      <div className="flex flex-wrap w-full gap-1">
        {tags.length === 0 ? (
          <p className="text-sm text-gray-400">토픽이 없습니다.</p>
        ) : (
          tags.map((item: string) => (
            <span
              key={item}
              className="flex items-center justify-center px-2 py-1 text-xs font-bold text-black rounded-3xl"
              style={{ backgroundColor: getTagColor(item) }}
            >
              {item}
            </span>
          ))
        )}
      </div>
    </div>
  );
}
