'use client';

import { Realtime } from 'ably';
import { AblyProvider, ChannelProvider } from 'ably/react';
import { User } from '@/type';
import Chat from './chat';

interface Props {
  channel: string;
  user: User;
  activityTitle: string;
}

export default function ChatPage({ channel, user, activityTitle }: Props) {
  const client = new Realtime({
    key: process.env.NEXT_PUBLIC_ABLY_KEY,
    clientId: user.id,
  });
  const channelName = `chat:${channel[0]}`;

  return (
    <AblyProvider client={client}>
      <ChannelProvider channelName={channelName}>
        <Chat channelName={channelName} user={user} activityTitle={activityTitle} />
      </ChannelProvider>
    </AblyProvider>
  );
}
