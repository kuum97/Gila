'use client';

import { Input } from '@/components/ui/input';
import Label from '@/components/ui/label';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Pencil } from 'lucide-react';
import { editImage } from '@/app/action/user';
import { FileUpload } from '@/components/file-upload';

interface UserData {
  image?: string;
}

export default function UserImage({
  userData = {},
  edit = false,
}: {
  userData?: UserData;
  edit?: boolean;
}) {
  const [url, setUrl] = useState('');

  const onChange = (src?: string) => {
    if (!src) return;
    setUrl(src);
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32">
          <Avatar className="w-full h-full">
            <AvatarImage
              src=""
              alt="Profile"
              className="object-cover w-full h-full border border-gray-300 rounded-full"
            />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          {edit && (
            <div className="relative">
              <Label
                htmlFor="picture"
                className="absolute bottom-0 right-0 p-2 bg-white border border-gray-300 rounded-full shadow-lg cursor-pointer"
              >
                <Pencil className="text-gray-600" size={20} />
              </Label>
              <FileUpload onChange={onChange} value={url} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
