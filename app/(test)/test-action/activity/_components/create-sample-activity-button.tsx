'use client';

import { fa, faker } from '@faker-js/faker';

import { createActivity } from '@/app/action/activity';
import { Button } from '@/components/ui/button';
import { useTransition } from 'react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const seoulDistricts = [
  '종로구',
  '중구',
  '용산구',
  '성동구',
  '광진구',
  '동대문구',
  '중랑구',
  '성북구',
  '강북구',
  '도봉구',
  '노원구',
  '은평구',
  '서대문구',
  '마포구',
  '양천구',
  '강서구',
  '구로구',
  '금천구',
  '영등포구',
  '동작구',
  '관악구',
  '서초구',
  '강남구',
  '송파구',
  '강동구',
];
const tagList = ['내향', '즉흥적', '도시', '랜드마크', '홀로', '액티비티', '느긋하기'];

function getRandomTags(tags: string[]) {
  const numToSelect = Math.floor(Math.random() * 6) + 2;
  const shuffled = tags.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numToSelect);
}

function getRandomDistricts(districts: string[]) {
  const numToSelect = Math.floor(Math.random() * 4) + 3;
  const shuffled = districts.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numToSelect);
}
export default function CreateSampleActivityButton() {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const createSampleActivity = () => {
    startTransition(async () => {
      const thumbnails = Array.from({ length: 5 }, () => faker.image.url());
      const title = faker.word.words();
      const description = faker.word.words(6);
      const startDate = faker.date.past();
      const endDate = faker.date.future();
      const locations = getRandomDistricts(seoulDistricts);
      const maximumCount = Math.floor(Math.random() * 4) + 3;
      const tags = getRandomTags(tagList);
      const action = await createActivity({
        title,
        thumbnails,
        description,
        endDate,
        startDate,
        locations,
        maximumCount,
        tags,
      });
      if (!action.success) {
        toast.error(action.message);
        return;
      }
      toast.success(action.message);
      router.refresh();
    });
  };

  return (
    <Button onClick={createSampleActivity} disabled={isPending}>
      {isPending ? '생성중' : 'activity 생성'}
    </Button>
  );
}
