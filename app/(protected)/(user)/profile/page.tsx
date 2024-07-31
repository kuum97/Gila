import ProfileItem from '@/app/(protected)/(user)/profile/_components/profile-Item';
import UserImage from './_components/user-Image';

export default function Page() {
  return (
    <div className="m-8">
      <UserImage />
      <ProfileItem />
    </div>
  );
}
