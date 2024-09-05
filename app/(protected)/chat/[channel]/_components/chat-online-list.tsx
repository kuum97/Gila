/* eslint-disable @typescript-eslint/no-explicit-any */
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { RequestWithReqUser } from '@/type';
import ChatOnlineUser from './chat-online-user';

interface Props {
  member: RequestWithReqUser[];
  users: any;
}

export default function ChatOnlineList({ users, member }: Props) {
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
          {member.map((item: RequestWithReqUser) => (
            <li key={item.id}>
              <ChatOnlineUser user={item} />
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
