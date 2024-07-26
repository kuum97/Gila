import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface Props {
  imageSrc?: string;
  name: string;
}
export default function UserIcon({ imageSrc = '/test.png', name }: Props) {
  return (
    <div className="flex items-center gap-1 text-xs">
      <Avatar className="w-5 h-5">
        <AvatarImage src={imageSrc} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <span className="font-bold flex-shrink-0">{name}</span>
    </div>
  );
}
