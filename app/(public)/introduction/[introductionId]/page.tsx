import ProfileImage from '@/app/(protected)/(user)/profile/_components/profile-image';
import { getUserProfileWithIntroducedInfos } from '@/app/data/user';
import ProfileItem from '@/components/profile-item';

interface Params {
  introductionId: string;
}

export default async function Page({ params }: { params: Params }) {
  const id = params.introductionId;
  const userData = await getUserProfileWithIntroducedInfos(id);

  return (
    <div className="m-8">
      <ProfileImage image={userData.user.image} />
      <ProfileItem userData={userData} />
    </div>
  );
}
