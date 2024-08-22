'use client';

import { Realtime } from 'ably';
import { AblyProvider, ChannelProvider } from 'ably/react';
import { User } from '@/type';
import Chat from './chat';

interface Props {
  channel: string;
  user: User;
}

export default function ChatPage({ channel, user }: Props) {
  // 👉 Instantiate Ably client
  const client = new Realtime({
    key: '9bHIxw.wgXGGA:wE33mIt3P8z80cfkKZumcqb6NPL9AbQUKU_SZZ1oZ3M',
    clientId: user.nickname,
  });
  const channelName = `chat:${channel}`;

  return (
    // 👉 Wrap chat app in AblyProvider and ChannelProvider necessary to
    // use Ably hooks
    <AblyProvider client={client}>
      <ChannelProvider channelName={channelName}>
        <div>
          <div className="col-span-2">
            <Chat channelName={channelName} user={user} />
          </div>
        </div>
      </ChannelProvider>
    </AblyProvider>
  );
}
