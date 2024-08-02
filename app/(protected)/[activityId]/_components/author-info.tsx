import { getUserProfileWithIntroducedInfos } from '@/app/data/user';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

interface Props {
  ownerId: string;
}

export default async function AuthorInfo({ ownerId }: Props) {
  const owner = await getUserProfileWithIntroducedInfos(ownerId);

  return (
    <div className="flex flex-col justify-start gap-2">
      <p className="text-sm font-bold">등록한 길라</p>
      <Link href={`/introduction?userId=${ownerId}`} className="h-fit">
        <div className="flex items-center gap-4 p-4 mt-1 mb-28 border border-solid rounded-lg">
          <div className="flex items-center gap-1 text-xs">
            <Avatar>
              <AvatarImage
                src={owner.user.image ? owner.user.image : '/test.png'}
                className="object-cover w-10 h-10 rounded-full"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-sm">{owner.user.nickname}</p>
            <p className="text-sm">{owner.averageReviewScore}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
