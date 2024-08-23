import { ActivityWithFavoriteAndCount } from '@/type';
import Link from 'next/link';

interface Props {
  activity: ActivityWithFavoriteAndCount;
}

export default function Channel({ activity }: Props) {
  return (
    <Link href={`/chat/${activity.id}`}>
      <div className="border rounded-lg h-20">{activity.title}</div>
    </Link>
  );
}
