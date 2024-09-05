'use client';

import { Realtime } from 'ably';
import { AblyProvider, ChannelProvider } from 'ably/react';
import { RequestWithReqUser, User } from '@/type';
import Chat from './chat';

interface Props {
  channel: string;
  user: User;
  activityTitle: string;
  member: RequestWithReqUser[];
}

export default function ChatPage({ channel, user, activityTitle, member }: Props) {
  const client = new Realtime({
    key: process.env.NEXT_PUBLIC_ABLY_KEY,
    clientId: user.id,
  });
  const channelName = `chat:${channel}`;

  return (
    <AblyProvider client={client}>
      <ChannelProvider channelName={channelName}>
        <Chat channelName={channelName} user={user} activityTitle={activityTitle} member={member} />
      </ChannelProvider>
    </AblyProvider>
  );
}
