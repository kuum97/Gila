import { getCurrentUser } from '@/app/data/user';
import { getMyChat } from '@/app/data/chat';
import ChatChannelList from './_components/chat-channel-list';

export default async function Page() {
  const { activities, cursorId } = await getMyChat({ take: 7 });
  const user = await getCurrentUser();

  return (
    <main className="p-5">
      <div className="flex items-center justify-between w-full pb-5">
        <div>
          <h1 className="text-2xl font-bold">
            <span className="text-3xl text-primary">{user.nickname}</span>님이 등록한 채팅
          </h1>
          <p className="text-base font-medium">등록한 활동의 참가자들과 소통해보세요!</p>
        </div>
      </div>
      <ChatChannelList myActivities={activities} activityCursorId={cursorId} />
    </main>
  );
}
