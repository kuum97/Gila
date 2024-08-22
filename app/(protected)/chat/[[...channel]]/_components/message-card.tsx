import { Avatar, AvatarImage } from '@/components/ui/avatar';

export default function MessageCard({ message }) {
  return (
    <div className="flex items-center">
      <Avatar className="mr-2">
        <AvatarImage src={message.data.avatarUrl} />
      </Avatar>
      <p>{message.data.text}</p>
    </div>
  );
}
