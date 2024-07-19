'use client'

import { RegisterSchema } from '@/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useTransition } from 'react'
import { RegisterSchemaType } from '@/type'
import { register } from '@/app/action/user'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

const fields = [
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
]

export function RegisterForm() {
  const router = useRouter()

  const [isPending, startTransition] = useTransition()

  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  function onSubmit(values: RegisterSchemaType) {
    startTransition(async () => {
      const action = await register(values)
      if (!action.success) {
        toast.error(action.message)
        return
      }
      toast.success(action.message)
      router.replace('/sign-in')
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 w-full'>
        {fields.map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name as keyof RegisterSchemaType}
            render={({ field: controllerField }) => (
              <FormItem>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={field.placeholder}
                    type={field.type}
                    {...controllerField}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button
          disabled={isPending || !form.formState.isValid}
          type='submit'
          className='w-full'
        >
          회원가입
        </Button>
      </form>
    </Form>
  )
}
