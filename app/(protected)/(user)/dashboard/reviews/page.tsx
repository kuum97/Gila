import ReviewsCard from './_components/reviews-card';

export default function Page() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-lg font-bold">이전 활동은 어땠나요?</h1>
      <ReviewsCard />
      <ReviewsCard />
      <ReviewsCard />
      <ReviewsCard />
      <ReviewsCard />
    </div>
  );
}
