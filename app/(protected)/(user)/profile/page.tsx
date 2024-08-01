import ProfileItem from '@/app/(protected)/(user)/profile/_components/profile-Item';
import { getUserProfileWithIntroducedInfos } from '@/app/data/user';
import UserImage from '@/app/(protected)/(user)/profile/_components/user-Image';

export default async function Page() {
  const userData = await getUserProfileWithIntroducedInfos();

  return (
    <div className="m-8">
      <UserImage userData={userData.user} />
      <ProfileItem userData={userData} />
    </div>
  );
}
