import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { editPassword } from '@/app/action/user';

export default function EditPasswordForm() {
  const passwordSchema = z.object({
    password: z.string().min(1, { message: '비밀번호를 입력해 주세요.' }),
  });

  const onSubmit = async (values: z.infer<typeof passwordSchema>) => {
    try {
      const result = await editPassword(values.password);

      if (!result.success) {
        toast.error(result.message);
        return;
      }

      toast.success(result.message);
    } catch (error) {
      toast.error('비밀번호 수정 중에 문제가 발생하였습니다.');
    }
  };

  const form = useForm({
    resolver: zodResolver(passwordSchema),
    defaultValues: { password: '' },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-center justify-center gap-6 mx-2"
      >
        <div className="flex flex-col w-full">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="hidden text-sm">비밀번호</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="비밀번호를 입력해 주세요"
                    {...field}
                    className="text-xs"
                  />
                </FormControl>
                <FormMessage className="text-xs text-red" />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="mt-4 text-sm font-bold text-white">
          저장하기
        </Button>
      </form>
    </Form>
  );
}
