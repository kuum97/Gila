import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import MyQuestionForm from '@/app/(protected)/(user)/dashboard/my-question/_components/my-question-form';
import PlusButton from '@/components/common/plus-button';

export default function MyQuestionCreateModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <PlusButton />
      </DialogTrigger>
      <DialogTitle>
        <div />
      </DialogTitle>
      <DialogContent className="bg-white">
        <MyQuestionForm />
      </DialogContent>
    </Dialog>
  );
}
