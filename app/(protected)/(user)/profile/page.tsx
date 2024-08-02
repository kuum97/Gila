import ProfileItem from '@/app/(protected)/(user)/profile/_components/profile-Item';
import ProfileImage from '@/app/(protected)/(user)/profile/_components/profile-Image';
import {
  getCurrentUser,
  getCurrentUserId,
  getUserProfileWithIntroducedInfos,
} from '@/app/data/user';

export default async function Page() {
  const userId = await getCurrentUserId();
  const { image } = await getCurrentUser();
  const userData = await getUserProfileWithIntroducedInfos(userId);

  return (
    <div className="m-8">
      <ProfileImage image={image} />
      <ProfileItem userData={userData} />
    </div>
  );
}
