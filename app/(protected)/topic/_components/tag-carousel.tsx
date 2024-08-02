'use client';

import Image from 'next/image';
import Logo from '@/public/logo.png';
import { TAGS } from '@/constants/tag';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import TagContainer from '@/app/(protected)/topic/_components/tag-container';

interface Props {
  addTag: (tagName: string) => void;
  changeTag: (list: string[]) => void;
  tagList: string[];
}

export default function TagCarousel({ addTag, changeTag, tagList }: Props) {
  return (
    <Carousel className="w-full relative">
      <CarouselContent>
        {TAGS.map((item) => (
          <CarouselItem key={item.id}>
            <TagContainer tag={item.tag} addTag={addTag} changeTag={changeTag} tagList={tagList} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex flex-col items-center justify-center absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <Image src={Logo} alt="로고 이미지" width={80} />
      </div>
      <CarouselPrevious className="left-5" />
      <CarouselNext className="right-5" />
    </Carousel>
  );
}
