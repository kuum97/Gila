'use client';

import { RegisterSchema } from '@/schema';
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
import { RegisterSchemaType } from '@/type';
import { register } from '@/app/action/user';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import PasswordInput from '@/components/ui/password-input';

const registerFields = [
  { name: 'nickname', label: '닉네임', placeholder: '닉네임을 입력해 주세요', type: 'text' },
  { name: 'email', label: '이메일', placeholder: '이메일을 입력해 주세요', type: 'text' },
  {
    name: 'password',
    label: '비밀번호',
    placeholder: '비밀번호를 입력해 주세요',
    type: 'password',
  },
  {
    name: 'confirmPassword',
    label: '비밀번호 확인',
    placeholder: '비밀번호를 한 번 더 입력해 주세요',
    type: 'password',
  },
];

export default function RegisterForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      nickname: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onBlur',
  });

  function onSubmit(values: RegisterSchemaType) {
    startTransition(async () => {
      const action = await register(values);
      if (!action.success) {
        toast.error(action.message);
        return;
      }
      toast.success(action.message);
      router.replace('/sign-in');
    });
  }

  const handleVisibility = (name: string) => {
    if (name === 'password') {
      setIsVisible(!isVisible);
    } else {
      setIsConfirmVisible(!isConfirmVisible);
    }
  };

  const settingPasswordInputType = (name: string) => {
    if (name === 'password') return isVisible;
    return isConfirmVisible;
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        {registerFields.map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name as keyof RegisterSchemaType}
            render={({ field: controllerField }) => (
              <FormItem>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  {field.type === 'password' ? (
                    <PasswordInput
                      type={settingPasswordInputType(field.name) ? 'text' : 'password'}
                      handleToggle={() => handleVisibility(field.name)}
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
          회원가입
        </Button>
      </form>
    </Form>
  );
}
