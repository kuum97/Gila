import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Props {
  imageSrc?: string;
  name: string;
}
export default function UserIcon({ imageSrc, name }: Props) {
  return (
    <div className="flex items-center gap-1 text-xs">
      <Avatar className="w-5 h-5">
        <AvatarImage src={imageSrc} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <span className="flex-shrink-0 font-bold">{name}</span>
    </div>
  );
}
