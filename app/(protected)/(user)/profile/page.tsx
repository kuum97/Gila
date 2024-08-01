import ProfileItem from '@/app/(protected)/(user)/profile/_components/profile-Item';
import UserImage from './_components/user-Image';
import { getUserProfileWithIntroducedInfos } from '@/app/data/user';

export default async function Page() {
  const userData = await getUserProfileWithIntroducedInfos();

  return (
    <div className="m-8">
      <UserImage userData={userData.user} />
      <ProfileItem userData={userData} />
    </div>
  );
}
