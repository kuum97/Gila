'use client';

import { Pencil } from 'lucide-react';
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
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import ProfileForm from '@/app/(protected)/(user)/profile/edit/_components/profile-form';

// const FormFields = [
//   {
//     name: 'nickname',
//     label: '닉네임',
//     placeholder: '닉네임을 입력해 주세요',
//     type: 'text',
//   },
//   {
//     name: 'password',
//     label: '비밀번호',
//     placeholder: '비밀번호를 입력해 주세요',
//     type: 'password',
//   },
// ];

const FormSchema = z.object({
  nickname: z.string().min(1, { message: '닉네임을 입력해 주세요.' }).max(20, { message: '?' }),
  password: z.string().min(1, { message: '비밀번호를 입력해 주세요.' }).max(200, { message: '?' }),
});

export default function ProfileItem() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nickname: '',
      password: '',
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = () => {
    console.log('테스트입니다.');
  };

  // form 을 재사용할 수 있게 분리하기
  return (
    // <Form {...form}>
    //   <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
    //     <div className="flex flex-col items-center">
    //       <div className="relative w-32 h-32">
    //         <img
    //           src={imagePreview || '/test.png'}
    //           alt="Profile"
    //           className="object-cover w-full h-full border border-gray-300 rounded-full"
    //         />
    //         <label
    //           htmlFor="picture"
    //           className="absolute bottom-0 right-0 p-2 bg-white border border-gray-300 rounded-full shadow-lg cursor-pointer"
    //         >
    //           <Pencil className="text-gray-600" size={20} />
    //         </label>
    //         <Input id="picture" type="file" className="hidden" onChange={handleFileChange} />
    //       </div>
    //     </div>
    //     <div className="flex flex-col gap-4">
    //       {FormFields.map(({ name, label, placeholder, type }) => (
    //         <FormField
    //           key={name}
    //           control={form.control}
    //           name={name as 'nickname' | 'password'}
    //           render={({ field }) => (
    //             <FormItem>
    //               <FormLabel className="text-sm">{label}</FormLabel>
    //               <FormControl>
    //                 {type === 'textarea' ? (
    //                   <Textarea placeholder={placeholder} {...field} className="text-xs" />
    //                 ) : (
    //                   <Input type={type} placeholder={placeholder} {...field} className="text-xs" />
    //                 )}
    //               </FormControl>
    //               <FormMessage className="text-xs text-red" />
    //             </FormItem>
    //           )}
    //         />
    //       ))}
    //     </div>
    //   </form>
    // </Form>
    <div>
      <ProfileForm />
      <ProfileForm />
    </div>
  );
}
