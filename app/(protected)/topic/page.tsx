'use client';

import { useState } from 'react';
import TagFooter from '@/app/(protected)/topic/_components/tag-footer';
import TagCarousel from '@/app/(protected)/topic/_components/tag-carousel';
import { editTags, setFirstLoginToFalse } from '@/app/action/user';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export default function Page() {
  const [tagList, setTagList] = useState<string[]>([]);
  const router = useRouter();

  const addTag = (tagName: string) => {
    setTagList((prev) => [...prev, tagName]);
  };

  const changeTag = (list: string[]) => {
    setTagList([...list]);
  };

  const editTag = async () => {
    await setFirstLoginToFalse();
    const result = await editTags(tagList);
    toast.message(result.message);
    router.replace('/activity-list');
  };

  const passTag = async () => {
    await setFirstLoginToFalse();
    router.replace('/activity-list');
  };

  return (
    <div className="flex flex-col items-center justify-between w-[400px] h-screen">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="mt-10 text-3xl font-bold">나에 대해서 알려주세요!</p>
        <p className="text-sm text-center text-gray_600">
          나에게 해당하는 토픽을 정해주시면
          <br /> 맞춤 리스트를 보여드립니다!
        </p>
      </div>
      <TagCarousel addTag={addTag} changeTag={changeTag} tagList={tagList} />
      <TagFooter page={tagList.length} editTag={editTag} passTag={passTag} />
    </div>
  );
}
