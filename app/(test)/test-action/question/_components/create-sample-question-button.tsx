'use client';
import { createQuestion } from '@/app/action/question';
import { Button } from '@/components/ui/button';
import { faker } from '@faker-js/faker';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { toast } from 'sonner';

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

function getRandomDistrict(districts: string[]) {
  const randomIndex = Math.floor(Math.random() * districts.length);
  return districts[randomIndex];
}

export default function CreateSampleQuestionButton() {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const createSampleQuestion = () => {
    startTransition(async () => {
      const title = faker.word.words();
      const content = faker.word.words(6);
      const location = getRandomDistrict(seoulDistricts);

      const action = await createQuestion({ title, content, location });
      if (!action.success) {
        toast.error(action.message);
        return;
      }
      toast.success(action.message);
      router.refresh();
    });
  };

  return (
    <Button onClick={createSampleQuestion} disabled={isPending}>
      question 생성
    </Button>
  );
}
