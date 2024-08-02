'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { createQuestion } from '@/app/action/question';
import QuestionTipPopOver from '@/app/(protected)/(main)/question-list/_components/qusetion-tip-popover';
import QuestionLocationPopover from '@/app/(protected)/(main)/question-list/_components/question-location-popover';
import { toast } from 'sonner';
import { useTransition } from 'react';

const FormFields = [
  {
    name: 'location',
    label: '장소',
    placeholder: '장소를 입력해 주세요',
    type: 'text',
  },
  {
    name: 'title',
    label: '제목',
    placeholder: '제목을 입력해 주세요',
    type: 'text',
  },
  {
    name: 'content',
    label: '내용',
    placeholder: '내용을 입력해 주세요',
    type: 'textarea',
  },
];

const FormSchema = z.object({
  title: z
    .string()
    .min(1, { message: '제목을 입력해 주세요.' })
    .max(20, { message: '제목은 20자 이내로 입력해 주세요.' }),
  content: z
    .string()
    .min(1, { message: '내용을 입력해 주세요.' })
    .max(200, { message: '내용은 200자 이내로 입력해 주세요.' }),
  location: z
    .string()
    .min(1, { message: '장소를 선택해 주세요.' })
    .max(20, { message: '내용은 20자 이내로 입력해 주세요.' }),
});

export default function QuestionForm() {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: '',
      content: '',
      location: '',
    },
  });

  const selectLocation = (location: string) => {
    form.setValue('location', location);
    form.clearErrors('location');
  };

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    startTransition(async () => {
      const result = await createQuestion({
        title: values.title,
        content: values.content,
        location: values.location,
      });
      if (!result.success) {
        toast.error(result.message);
        return;
      }
      toast.success(result.message);
      form.reset();
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative flex items-end w-full h-full gap-6 px-4 pt-4 border rounded-lg shadow-md"
      >
        <div className="flex flex-col w-full">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm">{FormFields[0].label}</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={FormFields[0].type}
                      placeholder={FormFields[0].placeholder}
                      {...field}
                      className="text-xs"
                      disabled
                    />
                    <QuestionLocationPopover selectLocation={selectLocation} />
                  </div>
                </FormControl>
                <div className="h-4">
                  <FormMessage className="text-xs text-red" />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm">{FormFields[1].label}</FormLabel>
                <FormControl>
                  <Input
                    type={FormFields[1].type}
                    placeholder={FormFields[1].placeholder}
                    {...field}
                    className="text-xs"
                  />
                </FormControl>
                <div className="h-4">
                  <FormMessage className="text-xs text-red" />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm">{FormFields[2].label}</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={FormFields[2].placeholder}
                    {...field}
                    className="text-xs"
                  />
                </FormControl>
                <div className="h-4">
                  <FormMessage className="text-xs text-red" />
                </div>
              </FormItem>
            )}
          />
        </div>
        <div>
          <Button disabled={isPending} type="submit" className="px-4 py-1 mb-6 text-sm rounded-md">
            물어보기
          </Button>
        </div>
        <QuestionTipPopOver />
      </form>
    </Form>
  );
}
