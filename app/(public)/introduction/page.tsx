import UserImage from '@/app/(protected)/(user)/profile/_components/user-Image';
import IntroductionItem from '@/app/(public)/introduction/_components/introduction-item';

export default function Page() {
  return (
    <div className="m-8">
      <UserImage />
      <IntroductionItem />
    </div>
  );
}
