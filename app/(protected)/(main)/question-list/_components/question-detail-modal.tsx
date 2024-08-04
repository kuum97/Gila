/* eslint-disable no-underscore-dangle */
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import AnswerList from '@/app/(protected)/(main)/question-list/_components/answer-list';
import AnswerForm from '@/app/(protected)/(main)/question-list/_components/answer-form';
import { QuestionWithUserAndAnswers } from '@/type';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Props {
  userId: string;
  question: QuestionWithUserAndAnswers & { answerCursorId: string | null };
  createaAt: {
    time: number;
    result: string;
  };
}

export default function QuestionDetailModal({ question, userId, createaAt }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-primary">
          보기
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white h-screen flex flex-col justify-start pt-14">
        <DialogHeader className="h-fit gap-2">
          <DialogTitle>
            <p className="text-left text-4xl font-semibold leading-tight break-word">
              {question.title}
            </p>
          </DialogTitle>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <p className="text-sm font-semibold">{question.location}</p>
              <p className="text-[10px] text-nowrap w-10 text-center text-gray_500">{`${createaAt.time}${createaAt.result}전`}</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <Avatar className="w-7 h-7">
                <AvatarImage
                  src={question.user.image ? question.user.image : '/test.png'}
                  className="object-cover w-7 h-7 rounded-full"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-sm">{question.user.nickname}</p>
            </div>
          </div>
          <DialogDescription className="text-left break-words w-64">
            {question.content}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col">
          <AnswerForm questionId={question.id} />
          <AnswerList
            answers={question.answers}
            totalCount={question._count.answers}
            userId={userId}
            answerCursorId={question.answerCursorId}
            questionId={question.id}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
