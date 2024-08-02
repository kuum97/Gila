import EditProfileItem from '@/app/(protected)/(user)/profile/edit/_components/edit-profile-item';
import {
  getCurrentUser,
  getCurrentUserId,
  getUserProfileWithIntroducedInfos,
} from '@/app/data/user';
import EditImageForm from '@/app/(protected)/(user)/profile/edit/_components/edit-image-form';

export default async function Page() {
  const userId = await getCurrentUserId();
  const user = await getCurrentUser();
  const userData = await getUserProfileWithIntroducedInfos(userId);

  return (
    <div className="m-8">
      <EditImageForm userImg={user.image ?? undefined} />
      <EditProfileItem userData={userData.user} />
    </div>
  );
}
