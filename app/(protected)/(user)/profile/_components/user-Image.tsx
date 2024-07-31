'use client';

import { Input } from '@/components/ui/input';
import Label from '@/components/ui/label';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useRef, useState } from 'react';
import { Pencil } from 'lucide-react';

export default function UserImage({ edit = false }) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  // const fileInputRef = useRef(null);

  // const handleIconClick = () => {
  //   fileInputRef.current.click();
  // };

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

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32">
          <Avatar className="w-full h-full">
            <AvatarImage
              src={imagePreview || '/profile.png'}
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
              <Input id="picture" type="file" className="hidden" onChange={handleFileChange} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
