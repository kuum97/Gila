/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from '@/type';
import MessageCard from './message-card';

interface Props {
  user: User;
  messages: any;
}

export default function MessageList({ messages, user }: Props) {
  return (
    <ul>
      {messages.map((item: any) => (
        <li
          key={item.id}
          className={`flex p-3 ${user.nickname === item.clientId && 'flex-row-reverse'}`}
        >
          <MessageCard message={item} user={user} />
        </li>
      ))}
    </ul>
  );
}
