import { getRequestsByActivityId } from '@/app/data/activity-request';
import CreateSampleActivityRequestButton from './_components/create-sample-activity-request-button';
import CreateSampleReviewButton from './_components/create-sample-review-button';
import { getReviewsByActivityId } from '@/app/data/review';
import { getActivityById } from '@/app/data/activity';

export default async function Page({ params }: { params: { activityId: string } }) {
  const activityId = params.activityId;

  const activity = await getActivityById(activityId);

  const activityRequestsRes = await getRequestsByActivityId({ activityId });
  const activityRequests = activityRequestsRes.requests;
  const singleRequest = activityRequests[0];

  const reviewsRes = await getReviewsByActivityId({ activityId });
  const reviews = reviewsRes.reviews;
  const singleReview = reviews[0];

  return (
    <div className="space-y-4">
      <div className="font-bold text-2xl">Activity</div>
      <pre>{JSON.stringify(activity, null, 2)}</pre>
      <div className="font-bold text-2xl">Request</div>
      <pre>{JSON.stringify(singleRequest, null, 2)}</pre>
      <div className="font-bold text-2xl">review</div>
      <pre>{JSON.stringify(singleReview, null, 2)}</pre>
      <div className="space-y-4">
        <CreateSampleActivityRequestButton activityId={activityId} />
        <div className="space-y-2">
          {activityRequests.map((request) => (
            <div key={request.id} className="bg-slate-300 rounded-md p-2">
              <div>username: {request.requestUser.nickname}</div>
              <div>reqId: {request.id}</div>
              <div>reqStatus: {request.status}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <CreateSampleReviewButton activityId={activityId} />
        <div className="space-y-2">
          {reviews.map((review) => (
            <div key={review.id} className="bg-slate-300 rounded-md p-2">
              <div>reviewId: {review.id}</div>
              <div>rating: {review.rating}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
