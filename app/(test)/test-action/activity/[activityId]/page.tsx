import { getRequestsByActivityId } from '@/app/data/activity-request';
import CreateSampleActivityRequestButton from './_components/create-sample-activity-request-button';
import CreateSampleReviewButton from './_components/create-sample-review-button';
import { getReviewsByActivityId } from '@/app/data/review';

export default async function Page({ params }: { params: { activityId: string } }) {
  const activityId = params.activityId;

  const activityRequestsRes = await getRequestsByActivityId({ activityId });
  const activityRequests = activityRequestsRes.requests;

  const reviewsRes = await getReviewsByActivityId({ activityId });
  const reviews = reviewsRes.reviews;
  return (
    <div className="space-y-4">
      <div>
        <div>activity thumbnails</div>
        <div>activity tags</div>
        <div>activity title</div>
        <div>activity startDate</div>
        <div>activity endDate</div>
        <div>activity favorite count</div>
        <div>activity description</div>
        <div>activity location</div>
        <div>user 전부</div>
      </div>
      <div>
        <div>내가 신청한 request목록</div>
        <div>activity thumbnails[0]</div>
        <div>activity title</div>
        <div>activity startDate, endDate</div>
        <div>activity request status</div>
      </div>
      <div>
        해당 activity에 신청 된 request
        <div>
          <div>activity thumbnails[0]</div>
          <div>activity title</div>
          <div>activity startDate, endDate</div>
          <div>activity request status</div>
          <div>신청한 유저</div>
        </div>
      </div>
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
