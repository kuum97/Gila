import { getCurrentUser } from '@/app/data/user';
import ChatPage from './_components/chat-page';

export default async function Page({ params }: { params: { channel: string } }) {
  const user = await getCurrentUser();

  return <ChatPage channel={params.channel} user={user} />;
}
