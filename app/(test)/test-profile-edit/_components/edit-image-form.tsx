'use client';

import { Edit2 } from 'lucide-react';
import { useState, useTransition } from 'react';
import RenderAvatar from './render-avatar';
import { Button } from '@/components/ui/button';
import { editImage } from '@/app/action/user';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { UploadButton } from '@/components/upload-button';

type Props = {
  userImg?: string;
};

export default function EditImageForm({ userImg }: Props) {
  const [imageUrl, setImageUrl] = useState(userImg);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const onChange = (url?: string) => {
    if (!url) return;
    setImageUrl(url);
    setLoading(false);
  };

  const onUploadBegin = () => {
    setLoading(true);
  };

  const onCancel = () => {
    setImageUrl(userImg);
    setLoading(false);
  };

  const onEdit = () => {
    if (!imageUrl) {
      toast.error('이미지를 선택해 주세요.');
      return;
    }
    startTransition(async () => {
      const action = await editImage({ url: imageUrl });
      if (!action.success) {
        toast.error(action.message);
        return;
      }
      toast.success(action.message);
      router.refresh();
    });
  };

  const customButton = () => {
    return (
      <div className="z-50 bg-indigo-500 rounded-full p-2 border border-black">
        <Edit2 className="h-4 w-4" />
      </div>
    );
  };

  const showButtons = imageUrl !== userImg;

  return (
    <div className="relative">
      <RenderAvatar loading={loading} imageUrl={imageUrl} />
      <div className="absolute top-0 right-0 flex space-x-2">
        <UploadButton
          onChange={onChange}
          onUploadBegin={onUploadBegin}
          CustomButton={customButton}
        />
      </div>
      {showButtons && (
        <div className="flex gap-x-2">
          <Button disabled={isPending} className="bg-rose-300 hover:bg-rose-400" onClick={onCancel}>
            취소하기
          </Button>
          <Button disabled={isPending} onClick={onEdit}>
            바꾸기
          </Button>
        </div>
      )}
    </div>
  );
}
