'use client';

import { LoginSchema } from '@/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

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
import { useTransition } from 'react';
import { LoginSchemaType } from '@/type';
import { toast } from 'sonner';
import { login } from '@/app/action/user';
import { useRouter } from 'next/navigation';

const loginFields = [
  { name: 'email', label: 'Email', placeholder: 'test@test.com', type: 'text' },
  {
    name: 'password',
    label: 'Password',
    placeholder: '********',
    type: 'password',
  },
];

export default function LoginForm() {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: 'test@mail.com',
      password: 'test1234',
    },
  });

  function onSubmit(values: LoginSchemaType) {
    startTransition(async () => {
      const action = await login(values);
      if (!action.success) {
        toast.error(action.message);
        return;
      }
      toast.success(action.message);
      router.replace('/activity');
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
        {loginFields.map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name as keyof LoginSchemaType}
            render={({ field: controllerField }) => (
              <FormItem>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  <Input placeholder={field.placeholder} type={field.type} {...controllerField} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button disabled={isPending || !form.formState.isValid} type="submit" className="w-full">
          로그인
        </Button>
      </form>
    </Form>
  );
}
