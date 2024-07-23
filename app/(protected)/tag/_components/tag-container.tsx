import Image from 'next/image';
import Logo from '@/public/logo.png';
import TAGS from '@/constants/tag';
import { ReactNode } from 'react';

interface Props {
  page: number;
}

function TagSelectButton({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center w-40 h-40 rounded-xl bg-gray_100 hover:bg-primary">
      <p className="text-2xl font-bold">{children}</p>
    </div>
  );
}

export default function TagContainer({ page }: Props) {
  const tagContent = TAGS.find((tag) => tag.id === page);

  return (
    <div className="flex flex-col items-center justify-center w-full gap-10">
      <TagSelectButton>{tagContent?.tag[0]}</TagSelectButton>
      <div className="flex flex-col items-center justify-center">
        <Image src={Logo} alt="로고 이미지" width={80} />
      </div>
      <TagSelectButton>{tagContent?.tag[1]}</TagSelectButton>
    </div>
  );
}
