import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { QuestionWithUserAndAnswers } from '@/type';
import calculateDate from '@/utils/calculateData';

export default function QuestionDetail({
  questionInfo,
}: {
  questionInfo: QuestionWithUserAndAnswers;
}) {
  const createaAt = calculateDate(questionInfo.createdAt);

  return (
    <div className="flex flex-col h-fit gap-3">
      <p className="text-left text-3xl font-bold leading-tight break-word pb-2">
        {questionInfo.title}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold">{questionInfo.location}</p>
          <p className="text-[12px] text-nowrap w-10 text-center text-gray_500">{`${createaAt.time}${createaAt.result}전`}</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <Avatar className="w-7 h-7">
            <AvatarImage
              src={questionInfo.user.image || '/default-profile-image.png'}
              className="object-cover w-7 h-7 rounded-full"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-sm">{questionInfo.user.nickname}</p>
        </div>
      </div>
      <Separator className="bg-gray_300 my-2" />
      <div className="text-left break-words min-h-10">{questionInfo.content}</div>
    </div>
  );
}
