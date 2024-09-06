/* eslint-disable no-plusplus */

'use client';

import { Realtime } from 'ably';
import { AblyProvider, ChannelProvider } from 'ably/react';
import { RequestWithReqUser, User } from '@/type';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Chat from './chat';

interface Props {
  channel: string;
  user: User;
  activityTitle: string;
  member: RequestWithReqUser[];
  owner: User;
}

export default function ChatPage({ channel, user, activityTitle, member, owner }: Props) {
  const router = useRouter();
  const client = new Realtime({
    key: process.env.NEXT_PUBLIC_ABLY_KEY,
    clientId: user.id,
  });
  const channelName = `chat:${channel}`;

  useEffect(() => {
    let acceptUser = false;
    for (let i = 0; member.length > i; i++) {
      if (member[i].requestUserId === user.id) {
        acceptUser = true;
        break;
      }
    }
    if (user.id === owner.id) {
      acceptUser = true;
    }
    if (!acceptUser) {
      alert('접근 권한이 없는 채팅입니다. 채팅리스트로 이동해주세요.');
      router.replace('/dashboard/my-chat');
    }
  }, [member, owner, router, user]);

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
