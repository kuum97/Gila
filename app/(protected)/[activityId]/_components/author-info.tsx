import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function AuthorInfo() {
  return (
    <div className="mt-16">
      <p className="text-sm font-bold">등록한 작성자 정보</p>
      <div className="flex items-center gap-4 p-4 mt-1 mb-32 border border-solid rounded-lg bor">
        <div className="flex items-center gap-1 text-xs">
          <Avatar>
            <AvatarImage src="/test.png" className="object-cover w-10 h-10 rounded-full" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col justify-between">
          <p className="text-sm">닉네임</p>
          <p className="text-sm">2m</p>
        </div>
      </div>
    </div>
  );
}
