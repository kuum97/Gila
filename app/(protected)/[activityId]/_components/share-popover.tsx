/* eslint-disable jsx-a11y/anchor-is-valid */
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ExternalLink, Link, MessageCircle } from 'lucide-react';

export default function SharePopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <ExternalLink width={20} />
      </PopoverTrigger>
      <PopoverContent className="bg-white w-full flex gap-4">
        <div className="w-8 h-8 rounded-full flex justify-center items-center border-2">
          <Link width={20} />
        </div>
        <div className="w-8 h-8 rounded-full flex justify-center items-center bg-[#F9E000]">
          <MessageCircle width={20} fill="#3b1f06" />
        </div>
      </PopoverContent>
    </Popover>
  );
}
