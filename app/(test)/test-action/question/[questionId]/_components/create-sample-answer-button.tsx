'use client';

import { createAnswer } from '@/app/action/answer';
import { Button } from '@/components/ui/button';
import { faker } from '@faker-js/faker';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { toast } from 'sonner';

type Props = {
  questionId: string;
};

export default function CreateSampleAnswerButton({ questionId }: Props) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const createSampleAnswer = () => {
    startTransition(async () => {
      const content = faker.word.words(10);
      const images = Array.from({ length: 3 }, () => faker.image.url());

      const action = await createAnswer({ questionId, content, images });

      if (!action.success) {
        toast.error(action.message);
        return;
      }

      toast.success(action.message);
      router.refresh();
    });
  };

  return (
    <Button onClick={createSampleAnswer} disabled={isPending}>
      답변 생성
    </Button>
  );
}
