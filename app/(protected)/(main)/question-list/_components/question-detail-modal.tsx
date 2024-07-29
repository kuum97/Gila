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

export default function QuestionDetailModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-primary">
          보기
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white h-screen flex flex-col justify-start pt-14">
        <DialogHeader className="h-fit gap-2">
          <p className="text-left text-4xl font-semibold leading-tight">
            이 동네에 맛난거 있나요? 추천 부탁드립니다!
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <p>00시 00구</p>
              <p className="text-xs">1시간 전</p>
            </div>
            <p className="text-sm">박상준</p>
          </div>
          <DialogDescription className="text-left">
            부모님이랑 맛있는 식당가고 싶어요ㅜㅜ 조용하고 부모님 모시고가기 좋은곳 알려주세요!
            그리고 카페도 알려주시면 좋을것 더 감사하겠습니다!
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col">
          <AnswerForm />
          <AnswerList />
        </div>
      </DialogContent>
    </Dialog>
  );
}
