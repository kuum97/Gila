import UserImage from '@/app/(protected)/(user)/profile/_components/user-Image';
import IntroductionItem from '@/app/(public)/introduction/[introductionId]/_components/introduction-item';
import { getUserProfileWithIntroducedInfos } from '@/app/data/user';

interface Params {
  introductionId: string;
}

export default async function Page({ params }: { params: Params }) {
  const id = params.introductionId;

  const userData = await getUserProfileWithIntroducedInfos(id);

  console.log(id);

  return (
    <div className="m-8">
      <UserImage userData={userData.user} />
      <IntroductionItem userData={userData} />
    </div>
  );
}
