import { ActivityWithFavoriteAndCount } from '@/type';
import Link from 'next/link';

interface Props {
  activity: ActivityWithFavoriteAndCount;
}

export default function Channel({ activity }: Props) {
  return (
    <Link href={`/chat/${activity.id}`}>
      <div>{activity.title}</div>
    </Link>
  );
}
