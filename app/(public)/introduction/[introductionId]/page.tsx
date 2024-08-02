import ProfileImage from '@/app/(protected)/(user)/profile/_components/profile-Image';
import IntroductionItem from '@/app/(public)/introduction/[introductionId]/_components/introduction-item';
import { getCurrentUser, getUserProfileWithIntroducedInfos } from '@/app/data/user';

interface Params {
  introductionId: string;
}

export default async function Page({ params }: { params: Params }) {
  const id = params.introductionId;
  const { image } = await getCurrentUser();
  const userData = await getUserProfileWithIntroducedInfos(id);

  return (
    <div className="m-8">
      <ProfileImage image={image} />
      <IntroductionItem userData={userData} />
    </div>
  );
}
