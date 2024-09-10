'use client';

import { RegisterSchema } from '@/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
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
import { cn } from '@/lib/utils';
import PrimaryCTAButton from '@/components/common/primary-CTA-button';
import { sendEmail } from '@/app/action/mail';

const registerFields = [
  { name: 'nickname', label: '닉네임', placeholder: '닉네임을 입력해 주세요', type: 'text' },
  { name: 'email', label: '이메일', placeholder: '이메일을 입력해 주세요', type: 'text' },
  {
    name: 'emailCheck',
    label: '인증번호입력',
    placeholder: '인증번호를 입력해 주세요',
    type: 'text',
  },
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
  const [isCheck, setIsCheck] = useState(false);
  const [emailKey, setEmailKey] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      nickname: '',
      email: '',
      emailCheck: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'all',
  });

  const requsetKey = async () => {
    setIsCheck(true);
    const result = await sendEmail(form.getValues('email'));
    setEmailKey(result.key);
    toast.message('이메일을 확인해주세요.(스팸메일함도 확인해주세요.)');
  };

  const checkKey = () => {
    if (emailKey !== form.getValues('emailCheck')) {
      setValidEmail(false);
      form.setError('emailCheck', {
        type: 'manual',
        message: '인증번호가 일치하지 않습니다.',
      });
    } else {
      setValidEmail(true);
      toast.message('이메일 인증에 성공했습니다.');
    }
  };

  function onSubmit(values: RegisterSchemaType) {
    startTransition(async () => {
      const action = await register(values);
      if (!action.success) {
        toast.error(action.message);
        return;
      }
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
        <h1 className="mb-2 text-xl font-semibold">회원가입</h1>
        {registerFields.map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name as keyof RegisterSchemaType}
            render={({ field: controllerField }) => (
              <FormItem className="relative">
                <FormLabel>{field.label}</FormLabel>
                <FormControl className="text-base">
                  {field.type === 'password' ? (
                    <PasswordInput
                      type={settingPasswordInputType(field.name) ? 'text' : 'password'}
                      handleToggle={() => handleVisibility(field.name)}
                      placeholder={field.placeholder}
                      autoComplete="off"
                      className={cn(
                        form.getFieldState(field.name as keyof RegisterSchemaType).error &&
                          'bg-red bg-opacity-10 border-red',
                        'border border-gray-300',
                      )}
                      {...controllerField}
                    />
                  ) : (
                    <div className="relative">
                      <Input
                        disabled={field.name === 'emailCheck' && !isCheck}
                        type={field.type}
                        placeholder={field.placeholder}
                        className={cn(
                          form.getFieldState(field.name as keyof RegisterSchemaType).error &&
                            'bg-red bg-opacity-10 border-red',
                          'border border-gray-300',
                        )}
                        {...controllerField}
                      />
                      {(field.name === 'email' || field.name === 'emailCheck') && (
                        <PrimaryCTAButton
                          type="button"
                          className="text-white absolute top-1/2 right-1 -translate-y-1/2 w-10 h-8"
                          onClick={field.name === 'email' ? requsetKey : checkKey}
                          disabled={
                            field.name === 'email'
                              ? isCheck ||
                                !form.getValues('email') ||
                                !!form.getFieldState('email').invalid
                              : !isCheck
                          }
                          text={field.name === 'email' ? '인증' : '확인'}
                        />
                      )}
                    </div>
                  )}
                </FormControl>
                <div className="h-5">
                  <FormMessage className="text-xs" />
                </div>
              </FormItem>
            )}
          />
        ))}
        <PrimaryCTAButton
          text="회원가입"
          disabled={isPending || !form.formState.isValid || !validEmail}
          type="submit"
        />
      </form>
    </Form>
  );
}
