import { AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AnswerWithUser } from '@/type';
import { Avatar } from '@radix-ui/react-avatar';

export default function AnswerItem({ answer }: { answer: AnswerWithUser }) {
  return (
    <div className="flex flex-col border rounded-md p-3 gap-2">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage
            src={answer.user.image ? answer.user.image : '/test.png'}
            className="object-cover w-7 h-7 rounded-full"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="text-base">{answer.user.nickname}</p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="w-full">
          {/* {answer.images && (
            <Image src={answer.images[0]} alt="답변 이미지" height={200} width={200} />
          )} */}
        </div>
        <p className="text-sm">{answer.content}</p>
      </div>
    </div>
  );
}
