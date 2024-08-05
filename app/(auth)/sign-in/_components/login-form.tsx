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
import { cn } from '@/lib/utils';
import Spinner from '@/components/ui/spinner';

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
      router.replace('/activity-list');
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <h1 className="mb-2 text-xl font-semibold">로그인</h1>
        {loginFields.map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name as keyof LoginSchemaType}
            render={({ field: controllerField }) => (
              <FormItem className="relative">
                <FormLabel className="text-base">{field.label}</FormLabel>
                <FormControl>
                  {field.type === 'password' ? (
                    <PasswordInput
                      type={isVisible ? 'text' : 'password'}
                      handleToggle={handleVisibility}
                      placeholder={field.placeholder}
                      className={cn(
                        form.getFieldState(field.name as keyof LoginSchemaType).error &&
                          'bg-red bg-opacity-10 border-red',
                        'border border-gray-300',
                      )}
                      {...controllerField}
                    />
                  ) : (
                    <Input
                      type={field.type}
                      placeholder={field.placeholder}
                      className={cn(
                        form.getFieldState(field.name as keyof LoginSchemaType).error &&
                          'bg-red bg-opacity-10 border-red',
                        'border border-gray-300',
                      )}
                      {...controllerField}
                    />
                  )}
                </FormControl>
                <div className="h-5">
                  <FormMessage className="text-xs" />
                </div>
              </FormItem>
            )}
          />
        ))}
        <Button
          disabled={isPending || !form.formState.isValid}
          type="submit"
          className="w-full py-3 text-lg font-semibold text-white disabled:bg-primary_dark"
        >
          로그인
        </Button>
      </form>
    </Form>
  );
}
