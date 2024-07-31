import EditProfileItem from '@/app/(protected)/(user)/profile/edit/_components/edit-profile-item';
import UserImage from '@/app/(protected)/(user)/profile/_components/user-Image';

export default function Page() {
  return (
    <div className="m-8">
      <UserImage edit />
      <EditProfileItem />
    </div>
  );
}
