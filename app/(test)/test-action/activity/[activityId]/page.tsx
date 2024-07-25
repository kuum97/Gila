import { getActivityRequestsByActivityId } from '@/app/data/activity-request';
import CreateSampleActivityRequestButton from './_components/create-sample-activity-request-button';
import CreateSampleReviewButton from './_components/create-sample-review-button';

export default async function Page({ params }: { params: { activityId: string } }) {
  const activityId = params.activityId;

  const activityRequestsRes = await getActivityRequestsByActivityId(activityId);
  const activityRequests = activityRequestsRes.requests;

  // const reviews = await
  return (
    <div className="space-y-4">
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
      </div>
    </div>
  );
}
