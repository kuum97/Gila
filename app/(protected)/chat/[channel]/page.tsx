import { getCurrentUser } from '@/app/data/user';
import { getChannelById } from '@/app/data/chat';
import ChatPage from './_components/chat-page';

export default async function Page({ params }: { params: { channel: string } }) {
  const user = await getCurrentUser();
  const activity = await getChannelById(params.channel);

  return (
    <ChatPage
      channel={params.channel}
      user={user}
      activityTitle={activity.title}
      member={activity.activityRequests}
    />
  );
}
