import EditProfileItem from '@/app/(protected)/(user)/profile/edit/_components/edit-profile-item';
import { getUserProfileWithIntroducedInfos } from '@/app/data/user';
import UserImage from '@/app/(protected)/(user)/profile/_components/user-Image';

export default async function Page() {
  const userData = await getUserProfileWithIntroducedInfos();

  return (
    <div className="m-8">
      <UserImage userData={userData.user} />
      <EditProfileItem userData={userData.user} />
    </div>
  );
}
