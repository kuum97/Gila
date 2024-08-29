/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { User } from '@/type';
import calculateDate from '@/utils/calculateData';

interface Props {
  user: User;
  message: any;
}

export default function MessageCard({ message, user }: Props) {
  const createAt = calculateDate(message.timestamp);

  return (
    <div className="flex text-sm">
      {user.id !== message.clientId && (
        <Avatar className="mr-2">
          <AvatarImage src={message.data.avatarUrl || '/default-profile-image.png'} />
        </Avatar>
      )}
      <div className="flex flex-col gap-3">
        {user.id !== message.clientId && <p className="text-xs">{message.data.nickname}</p>}
        <div
          className={`flex items-end gap-1 ${user.id === message.clientId && 'flex-row-reverse'}`}
        >
          <p
            className={`px-2 py-1 rounded-lg max-w-52 ${user.id === message.clientId ? 'bg-primary' : 'bg-gray_300'}`}
          >
            {message.data.text}
          </p>
          <p
            className={`text-[10px] w-10 text-nowrap ${user.id === message.clientId ? 'text-end' : 'text-start'}`}
          >{`${createAt.time}${createAt.result}전`}</p>
        </div>
      </div>
    </div>
  );
}
