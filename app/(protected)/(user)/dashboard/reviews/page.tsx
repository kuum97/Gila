import ReviewsCard from './_components/reviews-card';

export default function Page() {
  return (
    <div className="flex flex-col gap-3">
      <div>평가가능한 활동 리스트</div>
      <ReviewsCard />
      <ReviewsCard />
      <ReviewsCard />
      <ReviewsCard />
      <ReviewsCard />
    </div>
  );
}
