'use client';

import { editAnswer } from '@/app/action/answer';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import Spinner from '@/components/ui/spinner';
import { Textarea } from '@/components/ui/textarea';
import { UploadButton } from '@/components/upload-button';
import { AnswerWithUser } from '@/type';
import { zodResolver } from '@hookform/resolvers/zod';
import { FileImage, X } from 'lucide-react';
import Image from 'next/image';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

interface Props {
  defaultValue: AnswerWithUser;
  answerId: string;
  handleEditAnswer: () => void;
}

const FormFields = {
  name: 'content',
  label: '수정하기',
  placeholder: '답변을 입력해 주세요',
  type: 'textarea',
};

const FormSchema = z.object({
  content: z
    .string()
    .min(1, { message: '답변은 최소 1자 이상 입력해 주세요.' })
    .max(200, { message: '답변은 200자 이내로 입력해 주세요.' }),
});

export default function AnswerEditForm({ answerId, defaultValue, handleEditAnswer }: Props) {
  const [defaultImage, setDefaultImage] = useState<string[]>([defaultValue.images[0]]);
  const [loading, setLoading] = useState(false);
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      content: defaultValue.content,
    },
  });

  const uploadImage = (url?: string) => {
    if (!url) return;
    setDefaultImage([url]);
    setLoading(false);
  };

  const cancelImage = () => {
    setDefaultImage([]);
  };

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    startTransition(async () => {
      const result = await editAnswer({ answerId, content: values.content, images: defaultImage });
      if (!result.success) {
        toast.error(result.message);
        return;
      }
      toast.success(result.message);
      form.setValue('content', '');
      handleEditAnswer();
    });
  };

  const customButton = () => {
    return (
      <div className="z-10 relative">
        <div className="w-[80px] border-2 border-primary rounded-md flex justify-center items-center py-2">
          <FileImage className="h-4 w-4" color="#000" />
        </div>
      </div>
    );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-end gap-6 w-full">
        <div className="flex flex-col gap-4 w-full">
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm">{FormFields.label}</FormLabel>
                {loading && (
                  <div className="flex justify-center items-center">
                    <Spinner />
                  </div>
                )}
                {defaultImage[0] && (
                  <div className="w-full h-72 relative">
                    <Image
                      src={defaultImage[0]}
                      alt="답변 이미지"
                      fill
                      className="rounded-md object-cover"
                    />
                    <X className="absolute right-1 top-1" onClick={cancelImage} />
                  </div>
                )}
                <FormControl>
                  <Textarea placeholder={FormFields.placeholder} {...field} className="text-xs" />
                </FormControl>
                <div className="h-4">
                  <FormMessage className="text-xs text-red" />
                </div>
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col gap-3">
          <Button
            type="button"
            className="px-4 py-1 text-sm rounded-md h-fit"
            onClick={handleEditAnswer}
          >
            취소
          </Button>
          <UploadButton
            onChange={uploadImage}
            onUploadBegin={() => setLoading(true)}
            CustomButton={customButton}
          />
          <Button disabled={isPending} type="submit" className="px-4 py-1 text-sm rounded-md mb-6">
            수정하기
          </Button>
        </div>
      </form>
    </Form>
  );
}
