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
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const PromiseRequestFormSchema = z.object({
  numberOfPeople: z
    .number()
    .min(1, { message: '인원은 최소 1명이어야 합니다.' })
    .max(5, { message: '인원은 최대 5명까지 가능합니다.' }),
});

export default function PromiseRequestForm() {
  const form = useForm<z.infer<typeof PromiseRequestFormSchema>>({
    resolver: zodResolver(PromiseRequestFormSchema),
    defaultValues: {
      numberOfPeople: 1,
    },
  });

  const onSubmit = () => {
    // console.log('테스트입니다.');
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="fixed bottom-0 w-full h-20 bg-[#1B1B1B] z-50 flex justify-between gap-8 items-center px-8 py-0"
      >
        <div className="flex flex-col items-center justify-center">
          <p className="text-xs text-white">2024.07.19 - 2024.07.19</p>
          <p className="text-xs text-white">16:00 - 18:00</p>
        </div>

        <FormField
          control={form.control}
          name="numberOfPeople"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-center gap-2">
                <FormLabel className="text-xs text-white">인원</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    value={field.value}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                    className="w-16 h-6 m-0 text-xs text-black"
                  />
                </FormControl>
              </div>
              <FormMessage className="text-xs text-red text-[9px]" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="px-4 py-2 text-xs font-bold border border-none rounded-md bg-primary"
        >
          약속잡기
        </Button>
      </form>
    </Form>
  );
}
