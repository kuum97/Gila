import ProfileItem from '@/components/profile-item';
import ProfileImage from '@/app/(protected)/(user)/profile/_components/profile-image';
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
