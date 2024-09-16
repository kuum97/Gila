import QuestionCardSkeleton from '@/components/skeletons/question-card-skeleton';

export default function MyQuestionSkeleton() {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <QuestionCardSkeleton />
      <QuestionCardSkeleton />
      <QuestionCardSkeleton />
      <QuestionCardSkeleton />
      <QuestionCardSkeleton />
      <QuestionCardSkeleton />
    </div>
  );
}
