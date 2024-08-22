/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { useChannel } from 'ably/react';
import { useReducer, useEffect, useRef } from 'react';
import { User } from '@/type';
import MessageInput from './message-input';
import MessageList from './message-list';

interface Props {
  channelName: string;
  user: User;
}

const ADD = 'ADD';

const reducer = (prev: any, event: any) => {
  switch (event.name) {
    case ADD:
      return [...prev, event];
    default:
      prev;
  }
};

export default function Chat({ channelName, user }: Props) {
  const [messages, dispatch] = useReducer(reducer, []);
  const { channel, publish } = useChannel(channelName, dispatch);
  const scrollRef = useRef<HTMLDivElement>(null);

  const publishMessage = (text: string) => {
    publish({
      name: ADD,
      data: {
        text,
        avatarUrl: user.image,
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
  }, [messages.length]);

  return (
    <>
      <div className="overflow-y-auto p-5 h-[calc(100vh-75px-80px)]">
        <MessageList messages={messages} user={user} />
        <div ref={scrollRef} />
      </div>
      <div className="mt-auto p-5 sticky bottom-0">
        <MessageInput onSubmit={publishMessage} />
      </div>
    </>
  );
}
