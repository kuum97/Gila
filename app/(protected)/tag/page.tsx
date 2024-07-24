'use client';

import { useState } from 'react';
import TagFooter from './_components/tag-footer';
import TagCarousel from './_components/tag-carousel';

export default function Page() {
  const [tagList, setTagList] = useState<string[]>([]);

  const addTag = (tagName: string) => {
    setTagList((prev) => [...prev, tagName]);
  };

  const changeTag = (list: string[]) => {
    setTagList([...list]);
  };

  return (
    <div className="flex flex-col items-center justify-between w-screen h-screen">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="mt-10 text-3xl font-bold">나에 대해서 알려주세요!</p>
        <p className="text-sm text-center text-gray_600">
          나에게 해당하는 토픽을 정해주시면
          <br /> 맞춤 리스트를 보여드립니다!
        </p>
      </div>
      <TagCarousel addTag={addTag} changeTag={changeTag} tagList={tagList} />
      <TagFooter page={tagList.length} tagList={tagList} />
    </div>
  );
}
