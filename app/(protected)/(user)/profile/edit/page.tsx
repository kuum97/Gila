import EditProfileItem from '@/app/(protected)/(user)/profile/edit/_components/edit-profile-item';
import UserImage from '@/app/(protected)/(user)/profile/_components/user-Image';
import { getUserProfileWithIntroducedInfos } from '@/app/data/user';

export default async function Page() {
  const userData = await getUserProfileWithIntroducedInfos();

  return (
    <div className="m-8">
      <UserImage userData={userData.user} edit />
      <EditProfileItem userData={userData.user} />
    </div>
  );
}
