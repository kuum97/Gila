import EditProfileItem from '@/app/(protected)/(user)/profile/edit/_components/edit-profile-item';
import UserImage from '@/app/(protected)/(user)/profile/_components/user-Image';
import { getUserProfileWithIntroducedInfos } from '@/app/data/user';

export default async function Page() {
  const { user } = await getUserProfileWithIntroducedInfos();

  console.log(user);

  return (
    <div className="m-8">
      <UserImage user={user} edit />
      <EditProfileItem user={user} />
    </div>
  );
}
