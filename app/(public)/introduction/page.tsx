import UserImage from '@/app/(protected)/(user)/profile/_components/user-Image';
import IntroductionItem from '@/app/(public)/introduction/_components/introduction-item';
import { getUserProfileWithIntroducedInfos } from '@/app/data/user';

export default async function Page() {
  const userData = await getUserProfileWithIntroducedInfos();

  return (
    <div className="m-8">
      <UserImage userData={userData.user} />
      <IntroductionItem userData={userData} />
    </div>
  );
}
