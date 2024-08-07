'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import MyQuestionForm from '@/app/(protected)/(user)/dashboard/my-question/_components/my-question-form';
import PlusButton from '@/components/common/plus-div';

export default function MyQuestionCreateModal() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <Dialog open={modalOpen} onOpenChange={toggleModal}>
      <DialogTrigger asChild>
        <div className="w-8 h-8">
          <PlusButton />
        </div>
      </DialogTrigger>
      <DialogContent className="bg-white">
        <DialogTitle>질문하기</DialogTitle>
        <DialogDescription aria-describedby={undefined} />
        <MyQuestionForm toggleModal={toggleModal} />
      </DialogContent>
    </Dialog>
  );
}
