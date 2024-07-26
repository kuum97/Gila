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
import { useState, useTransition } from 'react';
import { LoginSchemaType } from '@/type';
import { toast } from 'sonner';
import { login } from '@/app/action/user';
import { useRouter } from 'next/navigation';
import PasswordInput from '@/components/ui/password-input';

const loginFields = [
  { name: 'email', label: '이메일', placeholder: '이메일을 입력해 주세요', type: 'text' },
  {
    name: 'password',
    label: '비밀번호',
    placeholder: '비밀번호를 입력해 주세요',
    type: 'password',
  },
];

export default function LoginForm() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
  });

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  function onSubmit(values: LoginSchemaType) {
    startTransition(async () => {
      const action = await login(values);
      if (!action.success) {
        toast.error(action.message);
        return;
      }
      toast.success(action.message);
      router.replace('/activity-list');
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        {loginFields.map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name as keyof LoginSchemaType}
            render={({ field: controllerField }) => (
              <FormItem className="relative">
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  {field.type === 'password' ? (
                    <PasswordInput
                      type={isVisible ? 'text' : 'password'}
                      handleToggle={handleVisibility}
                      placeholder={field.placeholder}
                      className="border-none shadow-md"
                      {...controllerField}
                    />
                  ) : (
                    <Input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="border-none shadow-md"
                      {...controllerField}
                    />
                  )}
                </FormControl>
                <div className="h-5">
                  <FormMessage className="text-xs text-red" />
                </div>
              </FormItem>
            )}
          />
        ))}
        <Button
          disabled={isPending}
          type="submit"
          className="w-full py-3 text-base font-semibold shadow-lg hover:bg-primary_dark active:bg-primary_dark"
        >
          로그인
        </Button>
      </form>
    </Form>
  );
}
