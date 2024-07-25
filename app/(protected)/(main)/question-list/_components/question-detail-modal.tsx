import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
import AnswerList from './answer-list';

export default function QuestionDetailModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">자세히 보기</Button>
      </DialogTrigger>
      <DialogContent className="bg-white h-screen flex flex-col justify-start pt-14">
        <DialogHeader className="h-fit gap-2">
          <p className="text-left text-4xl font-semibold leading-tight">
            이 동네에 맛난거 있나요? 추천 부탁드립니다!
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <p>00시 00구</p>
              <p className="text-xs">1</p>
            </div>
            <p className="text-sm">박상준</p>
          </div>
          <DialogDescription className="text-left">
            ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-5">
          <form className="flex items-start gap-5">
            <textarea
              className="border w-full h-20 rounded-md p-2 text-xs"
              placeholder="답변을 작성해주세요!"
            />
            <Button className="w-24">답변하기</Button>
          </form>
          <AnswerList />
        </div>
      </DialogContent>
    </Dialog>
  );
}
