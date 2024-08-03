import { RequestWithReqUser } from '@/type';
import PromisedListCard from '@/app/(protected)/(user)/(dashboard)/promised-list/_components/promised-list-card';

interface Props {
  promisedActivities: RequestWithReqUser[];
}

export default function PromisedList({ promisedActivities }: Props) {
  return (
    <ul>
      {promisedActivities.length > 0 ? (
        promisedActivities.map((activity) => (
          <li key={activity.id}>
            <PromisedListCard activity={activity} />
          </li>
        ))
      ) : (
        <div>none</div>
      )}
    </ul>
  );
}
