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

const FormFields = [
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
});

export default function QuestionForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: '',
      content: '',
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    // console.log('테스트입니다.');
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-end gap-6 w-full">
        <div className="flex flex-col gap-4 w-full">
          {FormFields.map(({ name, label, placeholder, type }) => (
            <FormField
              key={name}
              control={form.control}
              name={name as 'title' | 'content'}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">{label}</FormLabel>
                  <FormControl>
                    {type === 'textarea' ? (
                      <Textarea placeholder={placeholder} {...field} className="text-xs" />
                    ) : (
                      <Input type={type} placeholder={placeholder} {...field} className="text-xs" />
                    )}
                  </FormControl>
                  <FormMessage className="text-xs text-red" />
                </FormItem>
              )}
            />
          ))}
        </div>
        <Button type="submit" className="px-4 py-1 text-sm rounded-md">
          물어보기
        </Button>
      </form>
    </Form>
  );
}
