/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { User } from '@/type';

interface Props {
  user: User;
  message: any;
}

export default function MessageCard({ message, user }: Props) {
  return (
    <div className="flex items-center text-sm">
      {user.id !== message.clientId && (
        <Avatar className="mr-2">
          <AvatarImage src={message.data.avatarUrl} />
        </Avatar>
      )}
      <p
        className={`px-2 py-1 rounded-lg max-w-80 ${user.id === message.clientId ? 'bg-primary' : 'bg-gray_300'}`}
      >
        {message.data.text}
      </p>
    </div>
  );
}
