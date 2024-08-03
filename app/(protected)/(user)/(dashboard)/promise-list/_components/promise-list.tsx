import { RequestWithActivity } from '@/type';
import PromiseListCard from './promise-list-card';

export default function PromiseList({ promiseList }: { promiseList: RequestWithActivity[] }) {
  return (
    <ul className="flex flex-col gap-2 overflow-y-scroll h-[700px]">
      {promiseList.map((item) => (
        <li key={item.id}>
          <PromiseListCard promise={item} />
        </li>
      ))}
    </ul>
  );
}
