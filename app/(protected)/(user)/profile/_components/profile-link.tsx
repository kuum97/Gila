import { getCurrentUserId } from '@/app/data/user';
import Link from 'next/link';

export default async function ProfileLink() {
  const userId = await getCurrentUserId();

  return (
    <div>
      <Link href={`/introduction/${userId}`} className="w-full h-full text-center">
        프로필
      </Link>
    </div>
  );
}
