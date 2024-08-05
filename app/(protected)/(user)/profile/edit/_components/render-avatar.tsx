import { Loader2, User } from 'lucide-react';
import Image from 'next/image';

type Props = {
  loading: boolean;
  imageUrl?: string;
};

export default function RenderAvatar({ loading, imageUrl }: Props) {
  if (loading)
    return (
      <div className="flex items-center justify-center w-40 h-40 mx-auto my-0 rounded-full bg-slate-500">
        <Loader2 className="w-12 h-12 animate-spin" />
      </div>
    );
  if (imageUrl)
    return (
      <div className="relative w-40 h-40 mx-auto my-0 rounded-full bg-slate-500">
        <Image
          src={imageUrl}
          alt="img"
          fill
          sizes="(max-width: 768px) 100vw"
          className="object-cover rounded-full"
        />
      </div>
    );
  return (
    <div className="flex items-center justify-center w-40 h-40 rounded-full cursor-pointer bg-slate-500">
      <User className="w-12 h-12" />
    </div>
  );
}
