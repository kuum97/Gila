import Link from 'next/link';
import { TAGS } from '@/constants/tag';

interface Props {
  tags: string[];
}

export default function EditProfileTopic({ tags = [] }: Props) {
  const getTagColor = (item: string) => {
    const tagInfo = TAGS.find((tagItem) => tagItem.tag.includes(item));
    return tagInfo ? tagInfo.color : '#FFB800';
  };

  return (
    <div className="flex w-full pb-4 border-b border-gray-200 items-center">
      <p className="text-sm text-center w-[51.5px]">내 토픽</p>
      <div className="flex mx-3 items-center">
        <div className="flex flex-wrap w-[172px] gap-1">
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
        <Link href="/topic" className="text-xs text-gray-400 text-nowrap">
          수정하기
        </Link>
      </div>
    </div>
  );
}
