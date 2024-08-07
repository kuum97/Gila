import { User } from '@/type';
import ProfileTopic from '@/app/(protected)/(user)/profile/_components/profile-topic';
import ProfileRank from '@/app/(public)/introduction/[introductionId]/_components/profile-rank';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import ProfileScoreTip from './profile-score-tip';
import { Separator } from './ui/separator';

interface UserData {
  user: User;
  averageReviewScore: number;
  totalReviewCount: number;
  activityCount: number;
  questionCount: number;
}

interface Props {
  userData: UserData;
}

export default function ProfileItem({ userData }: Props) {
  const { user, activityCount, averageReviewScore, questionCount } = userData;
  const { nickname, tags } = user;

  return (
    <Card className="flex flex-col gap-3">
      <CardHeader className="flex flex-col p-0 px-3 pt-3">
        <div>
          <h2 className="text-lg font-semibold">닉네임</h2>
          <p className="text-xl font-bold">{nickname}</p>
        </div>
      </CardHeader>
      <Separator className="w-full bg-gray-200" />
      <CardContent className="flex flex-col w-full gap-3 p-0 px-3">
        <div className="flex flex-col flex-wrap w-full gap-2">
          <h2 className="text-lg font-semibold">태그</h2>
          <ProfileTopic tags={tags} />
        </div>
        <div>
          <div className="flex gap-4">
            <h2 className="text-lg font-semibold">점수</h2>
            <ProfileScoreTip />
          </div>
          <div className="flex justify-center w-full">
            <ProfileRank rating={averageReviewScore} score="style2" />
          </div>
        </div>
      </CardContent>
      <Separator className="w-full bg-gray-200" />
      <CardFooter className="flex justify-center w-full gap-6">
        <div className="flex flex-col items-center">
          <h2 className="text-base font-medium">가이드 횟수</h2>
          <p className="text-sm font-normal">{activityCount}</p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-base font-medium">질문 횟수</h2>
          <p className="text-sm font-normal">{questionCount}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
