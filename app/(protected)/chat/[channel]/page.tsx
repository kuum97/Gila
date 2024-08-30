import { getCurrentUser } from '@/app/data/user';
import { getActivityById } from '@/app/data/activity';
import ChatPage from './_components/chat-page';

export default async function Page({ params }: { params: { channel: string } }) {
  const user = await getCurrentUser();
  const activity = await getActivityById(params.channel);

  return <ChatPage channel={params.channel} user={user} activityTitle={activity.title} />;
}
