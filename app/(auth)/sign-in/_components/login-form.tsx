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
  { name: 'email', label: 'Email', placeholder: 'test@test.com', type: 'text' },
  {
    name: 'password',
    label: 'Password',
    placeholder: '********',
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
        <Button disabled={isPending || !form.formState.isValid} type="submit" className="w-full">
          로그인
        </Button>
      </form>
    </Form>
  );
}
