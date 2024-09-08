/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { RequestWithReqUser } from '@/type';
import { Circle } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Props {
  connectedUser: any[];
  user: RequestWithReqUser;
}

export default function ChatOnlineUser({ user, connectedUser }: Props) {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    for (let i = 0; connectedUser.length > i; i++) {
      if (user.requestUser.id === connectedUser[i].clientId) {
        setIsConnected(true);
        break;
      }
    }
  }, [connectedUser, user]);

  return (
    <div className="flex items-center">
      <Circle
        className="mr-2"
        size={8}
        fill={isConnected ? '#01FE19' : '#848484'}
        color={isConnected ? '#01FE19' : '#848484'}
      />
      {user.requestUser.nickname}
    </div>
  );
}
