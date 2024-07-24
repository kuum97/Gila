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
      <p className="mt-10 text-xl font-semibold">나에 대해서 알려주세요!</p>
      <div>
        {tagList.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
      <TagCarousel addTag={addTag} changeTag={changeTag} tagList={tagList} />
      <TagFooter page={tagList.length} />
    </div>
  );
}
