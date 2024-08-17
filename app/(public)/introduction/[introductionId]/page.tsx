import ProfileImage from '@/app/(protected)/(user)/profile/_components/profile-image';
import { getUserProfileWithIntroducedInfos } from '@/app/data/user';
import BackButton from '@/components/common/back-button';
import ProfileItem from '@/components/profile-item';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Params {
  introductionId: string;
}

export default async function Page({ params }: { params: Params }) {
  const id = params.introductionId;
  const userData = await getUserProfileWithIntroducedInfos(id);

  return (
    <main className="p-5 max-w-[420px] h-full">
      <div className="py-5">
        <BackButton />
      </div>
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
