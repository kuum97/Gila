'use client';

import { editAnswer } from '@/app/action/answer';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

interface Props {
  defaultValue: string;
  answerId: string;
  handleEditAnswer: () => void;
}

const FormFields = {
  name: 'content',
  label: '수정하기',
  placeholder: '답변을 입력해 주세요',
  type: 'textarea',
};

const FormSchema = z.object({
  content: z
    .string()
    .min(1, { message: '답변은 최소 1자 이상 입력해 주세요.' })
    .max(200, { message: '답변은 200자 이내로 입력해 주세요.' }),
});

export default function AnswerEditForm({ answerId, defaultValue, handleEditAnswer }: Props) {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      content: defaultValue,
    },
  });

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    startTransition(async () => {
      const result = await editAnswer({ answerId, content: values.content });
      if (!result.success) {
        toast.error(result.message);
        return;
      }
      toast.success(result.message);
      form.setValue('content', '');
      handleEditAnswer();
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-end gap-6 w-full">
        <div className="flex flex-col gap-4 w-full">
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm">{FormFields.label}</FormLabel>
                <FormControl>
                  <Textarea placeholder={FormFields.placeholder} {...field} className="text-xs" />
                </FormControl>
                <div className="h-4">
                  <FormMessage className="text-xs text-red" />
                </div>
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col gap-3">
          <Button
            type="button"
            className="px-4 py-1 text-sm rounded-md h-fit"
            onClick={handleEditAnswer}
          >
            취소
          </Button>
          <Button disabled={isPending} type="submit" className="px-4 py-1 text-sm rounded-md mb-6">
            수정하기
          </Button>
        </div>
      </form>
    </Form>
  );
}
