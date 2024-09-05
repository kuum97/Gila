/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestWithReqUser } from '@/type';
import { Circle } from 'lucide-react';

export default function ChatOnlineUser({ user }: { user: RequestWithReqUser }) {
  return (
    <div className="flex items-center">
      <Circle className="mr-2" size={8} fill="#01FE19" color="#01FE19" />
      {user.requestUser.nickname}
    </div>
  );
}
