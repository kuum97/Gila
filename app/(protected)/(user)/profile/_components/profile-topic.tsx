import Link from 'next/link';
import TAGS from '@/constants/tag';

interface Props {
  tags: string[];
  edit?: boolean;
}

export default function ProfileTopic({ tags, edit = false }: Props) {
  const getTagColor = (item: string) => {
    const tagInfo = TAGS.find((tagItem) => tagItem.tag.includes(item));
    return tagInfo ? tagInfo.color : '#FFB800';
  };

  return (
    <div className="flex justify-between w-full pb-4 mx-1 border-b border-gray-200">
      <div className="flex flex-wrap gap-1 w-80">
        {tags.map((item: string) => (
          <span
            key={item}
            className="flex justify-center items-center px-2 py-1 text-xs font-bold text-black rounded-3xl"
            style={{ backgroundColor: getTagColor(item) }}
          >
            {item}
          </span>
        ))}
      </div>
      {edit && (
        <Link href="/topic" className="mr-6 text-xs text-gray-400 w-16">
          수정하기
        </Link>
      )}
    </div>
  );
}
