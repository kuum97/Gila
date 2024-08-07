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
import { editNickname } from '@/app/action/user';

interface Props {
  setValue: (value: string) => void;
}

export default function EditNicknameForm({ setValue }: Props) {
  const nicknameSchema = z.object({
    nickname: z.string().min(1, { message: '닉네임을 입력해 주세요.' }),
  });

  const onSubmit = async (values: z.infer<typeof nicknameSchema>) => {
    try {
      const result = await editNickname(values.nickname);

      if (!result.success) {
        toast.error(result.message);
        return;
      }

      toast.success(result.message);
      setValue(values.nickname);
    } catch (error) {
      toast.error('닉네임 수정 중에 문제가 발생하였습니다.');
    }
  };

  const form = useForm({
    resolver: zodResolver(nicknameSchema),
    defaultValues: { nickname: '' },
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
            name="nickname"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="hidden text-sm">닉네임</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="닉네임을 입력해 주세요"
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
