/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { Circle, Crown, Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { RequestWithReqUser, User } from '@/type';
import { useEffect, useState } from 'react';
import ChatOnlineUser from '@/app/(protected)/chat/[channel]/_components/chat-online-user';

interface Props {
  member: RequestWithReqUser[];
  users: any[];
  owner: User;
}

export default function ChatOnlineList({ users, member, owner }: Props) {
  const [ownerConnected, setOwnerConnected] = useState(false);

  useEffect(() => {
    for (let i = 0; users.length > i; i++) {
      if (users[i].clientId === owner.id) {
        setOwnerConnected(true);
        break;
      }
    }
  }, [owner, users]);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="w-8 h-8 flex justify-center items-center">
          <Menu className="cursor-pointer" />
        </div>
      </SheetTrigger>
      <SheetContent className="border-none bg-opacity-90 bg-white_light" side="left">
        <SheetTitle>접속 유저</SheetTitle>
        <SheetDescription aria-describedby={undefined} />
        <ul className="flex flex-col mt-2 gap-2">
          <li>
            <div className="flex items-center gap-2">
              <Circle
                size={8}
                fill={ownerConnected ? '#01FE19' : '#848484'}
                color={ownerConnected ? '#01FE19' : '#848484'}
              />
              {owner.nickname}
              <Crown size={15} fill="#ffcf00" color="#ffcf00" />
            </div>
          </li>
          {member.map((item: RequestWithReqUser) => (
            <li key={item.id}>
              <ChatOnlineUser user={item} connectedUser={users} />
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
