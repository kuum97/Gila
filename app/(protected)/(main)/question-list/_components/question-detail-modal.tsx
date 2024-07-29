import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
import AnswerList from '@/app/(protected)/(main)/question-list/_components/answer-list';
import AnswerForm from '@/app/(protected)/(main)/question-list/_components/answer-form';
import { QuestionWithUserAndCount } from '@/type';
import { getAnswers } from '@/app/data/answer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default async function QuestionDetailModal({
  question,
}: {
  question: QuestionWithUserAndCount;
}) {
  const answerList = await getAnswers({ questionId: question.id });
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-primary">
          보기
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white h-screen flex flex-col justify-start pt-14">
        <DialogHeader className="h-fit gap-2">
          <p className="text-left text-4xl font-semibold leading-tight">{question.title}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <p className="text-sm font-semibold">{question.location}</p>
              {/* <p className="text-xs">{String(question.createdAt)}</p> */}
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
          <DialogDescription className="text-left">{question.content}</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col">
          <AnswerForm />
          <AnswerList answerList={answerList.answers} totalCount={question._count.answers} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
