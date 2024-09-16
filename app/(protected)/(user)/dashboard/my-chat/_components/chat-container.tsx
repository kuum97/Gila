import { getMyChat } from '@/app/data/chat';
import ChatChannelList from './chat-channel-list';

export default async function ChatContainer() {
  const { activities, cursorId } = await getMyChat({ take: 7 });

  return <ChatChannelList myActivities={activities} activityCursorId={cursorId} />;
}
