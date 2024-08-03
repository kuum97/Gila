'use client';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface Props {
  image?: string | null;
}

export default function ProfileImage({ image }: Props) {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32">
          <Avatar className="w-full h-full">
            <AvatarImage
              src={image || '/default-profile-image.png'}
              alt="Profile"
              className="object-cover w-full h-full border border-gray-300 rounded-full"
            />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
