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

const fields = [
  { name: 'nickname', label: 'Nickname', placeholder: 'kkkk', type: 'text' },
  { name: 'email', label: 'Email', placeholder: 'test@test.com', type: 'text' },
  {
    name: 'password',
    label: 'Password',
    placeholder: '********',
    type: 'password',
  },
  {
    name: 'confirmPassword',
    label: 'Confirm Password',
    placeholder: '********',
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
      email: '',
      password: '',
      confirmPassword: '',
    },
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
        {fields.map((field) => (
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
                      {...controllerField}
                    />
                  ) : (
                    <Input type={field.type} placeholder={field.placeholder} {...controllerField} />
                  )}
                </FormControl>
                <div className="h-5">
                  <FormMessage className="text-xs text-red" />
                </div>
              </FormItem>
            )}
          />
        ))}
        <Button disabled={isPending} type="submit" className="w-full">
          회원가입
        </Button>
      </form>
    </Form>
  );
}
