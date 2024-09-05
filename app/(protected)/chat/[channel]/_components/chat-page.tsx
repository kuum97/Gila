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
  owner: User;
}

export default function ChatPage({ channel, user, activityTitle, member, owner }: Props) {
  const client = new Realtime({
    key: process.env.NEXT_PUBLIC_ABLY_KEY,
    clientId: user.id,
  });
  const channelName = `chat:${channel}`;

  return (
    <AblyProvider client={client}>
      <ChannelProvider channelName={channelName}>
        <Chat
          channelName={channelName}
          user={user}
          activityTitle={activityTitle}
          member={member}
          owner={owner}
        />
      </ChannelProvider>
    </AblyProvider>
  );
}
