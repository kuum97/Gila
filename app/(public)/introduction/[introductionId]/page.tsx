import ProfileImage from '@/app/(protected)/(user)/profile/_components/profile-image';
import { getCurrentUser, getUserProfileWithIntroducedInfos } from '@/app/data/user';
import ProfileItem from '@/components/profile-item';

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
      <ProfileItem userData={userData} />
    </div>
  );
}
