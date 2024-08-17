import ProfileItem from '@/components/profile-item';
import ProfileImage from '@/app/(protected)/(user)/profile/_components/profile-image';
import { getCurrentUserId, getUserProfileWithIntroducedInfos } from '@/app/data/user';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default async function Page() {
  const userId = await getCurrentUserId();
  const userData = await getUserProfileWithIntroducedInfos(userId);

  return (
    <main className="p-5 tall:h-[calc(100vh-64px-71px)] pb-20">
      <Card className="shadow-md">
        <CardHeader className="flex flex-col gap-5">
          <CardTitle className="font-bold">
            <span className="text-3xl text-primary">{userData.user.nickname}</span>님의 프로필
          </CardTitle>
          <ProfileImage image={userData.user.image} />
        </CardHeader>
        <CardContent>
          <ProfileItem userData={userData} />
        </CardContent>
      </Card>
    </main>
  );
}
