/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { useChannel, usePresence, usePresenceListener } from 'ably/react';
import { useReducer, useEffect, useRef } from 'react';
import { RequestWithReqUser, User } from '@/type';
import BackButton from '@/components/common/back-button';
import MessageInput from './message-input';
import MessageList from './message-list';
import ChatOnlineList from './chat-online-list';

interface Props {
  channelName: string;
  user: User;
  activityTitle: string;
  member: RequestWithReqUser[];
}

const ADD = 'ADD';

const reducer = (prev: any, event: any) => {
  switch (event.name) {
    case ADD:
      return [...prev, event];
    default:
      return prev;
  }
};

export default function Chat({ channelName, user, activityTitle, member }: Props) {
  const [messages, dispatch] = useReducer(reducer, []);
  const { channel, publish } = useChannel(channelName, dispatch);
  const scrollRef = useRef<HTMLDivElement>(null);
  usePresence(channelName, { fullName: user.nickname });
  const { presenceData } = usePresenceListener(channelName);

  const publishMessage = (text: string) => {
    publish({
      name: ADD,
      data: {
        text,
        avatarUrl: user.image,
        nickname: user.nickname,
      },
    });
  };

  useEffect(() => {
    let ignore = false;
    const fetchHist = async () => {
      const history = await channel.history({ limit: 100, direction: 'forwards' });
      if (!ignore) history.items.forEach(dispatch);
    };
    fetchHist();
    return () => {
      ignore = true;
    };
  }, [channel]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView();
    }
  }, [messages]);

  return (
    <>
      <div className="tall:sticky fixed left-0 top-0 right-0 p-3.5 z-30 border bg-white_light">
        <div className="flex items-center justify-between">
          <BackButton />
          <p className="font-semibold">{activityTitle}</p>
          <ChatOnlineList users={presenceData} member={member} />
        </div>
      </div>
      <div className="overflow-y-scroll p-5 pb-0 h-[calc(100vh-64px-66px)] bg-white_light">
        <p className="text-xs text-center text-gray-400">
          ※ 24시간이 지난 대화는 저장되지 않습니다!
        </p>
        <MessageList messages={messages} user={user} />
        <div ref={scrollRef} />
      </div>
      <div className="mt-auto p-3 tall:sticky fixed left-0 bottom-0 right-0 border bg-white_light">
        <MessageInput onSubmit={publishMessage} />
      </div>
    </>
  );
}
