'use client';

import { Realtime } from 'ably';
import { AblyProvider, ChannelProvider } from 'ably/react';
import Chat from './_components/chat';
import ChannelList from './_components/channel-list';

export default function Page({ params }: { params: { channel: string } }) {
  const channels = [
    { path: '/chat/announcements', label: '# Announcements' },
    { path: '/chat/general', label: '# General' },
    { path: '/chat/random', label: '# Random' },
    { path: '/chat/mods-only', label: '# Mods-only', modOnly: true },
  ];

  // 👉 Instantiate Ably client
  const client = new Realtime({
    key: '9bHIxw.wgXGGA:wE33mIt3P8z80cfkKZumcqb6NPL9AbQUKU_SZZ1oZ3M',
    clientId: 'Alex',
  });
  const channelName = `chat:${params.channel}`;

  return (
    // 👉 Wrap chat app in AblyProvider and ChannelProvider necessary to
    // use Ably hooks
    <AblyProvider client={client}>
      <ChannelProvider channelName={channelName}>
        <div className="grid h-[calc(100vh-72.8px)] grid-cols-4">
          <div className="border-r border-gray-200 p-5">
            <ChannelList channels={channels} />
          </div>
          <div className="col-span-2">
            <Chat channelName={channelName} />
          </div>
          <div className="border-l border-gray-200 p-5" />
        </div>
      </ChannelProvider>
    </AblyProvider>
  );
}
