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

export default function ProfileForm({
  schema,
  defaultValues,
  name,
  label,
  placeholder,
  type,
  onSubmit,
}) {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues,
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
            name={name}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="hidden text-sm">{label}</FormLabel>
                <FormControl>
                  <Input type={type} placeholder={placeholder} {...field} className="text-xs" />
                </FormControl>
                <FormMessage className="text-xs text-red" />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="mt-4 text-sm font-bold">
          저장하기
        </Button>
      </form>
    </Form>
  );
}
