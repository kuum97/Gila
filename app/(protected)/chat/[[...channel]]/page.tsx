import { getCurrentUser } from '@/app/data/user';
import BackButton from '@/components/common/back-button';
import { getActivityById } from '@/app/data/activity';
import ChatPage from './_components/chat-page';

export default async function Page({ params }: { params: { channel: string } }) {
  const user = await getCurrentUser();
  const activity = await getActivityById(params.channel[0]);

  return (
    <>
      <div className="tall:sticky fixed left-0 top-0 right-0 p-3.5 z-30 border">
        <div className="flex items-center justify-between">
          <BackButton />
          <p className="font-semibold">{activity.title}</p>
        </div>
      </div>
      <ChatPage channel={params.channel} user={user} />
    </>
  );
}
