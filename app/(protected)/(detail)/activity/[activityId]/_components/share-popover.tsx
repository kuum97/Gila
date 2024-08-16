'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ExternalLink, Link, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

declare global {
  interface Window {
    Kakao: any;
  }
}

interface Props {
  shareImage: string;
  activityId: string;
}

export default function SharePopover({ activityId, shareImage }: Props) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/activity/${activityId}`;

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    toast.message('링크를 클립보드에 복사했습니다.');
  };

  const shareKakao = () => {
    const { Kakao } = window;
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'Gila',
        description: '길라와 같이 떠나자!',
        imageUrl: shareImage,
        link: {
          mobileWebUrl: url,
        },
      },
      buttons: [
        {
          title: '친구와 같이 매듭 묶기',
          link: {
            mobileWebUrl: url,
          },
        },
      ],
    });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <ExternalLink width={20} className="cursor-pointer" />
      </PopoverTrigger>
      <PopoverContent className="bg-white w-full flex gap-4" align="end">
        <div
          className="w-8 h-8 rounded-full flex justify-center items-center border-2 shadow-md"
          onClick={copyLink}
        >
          <Link width={20} />
        </div>
        <div
          className="w-8 h-8 rounded-full flex justify-center items-center bg-[#F9E000] shadow-md"
          onClick={shareKakao}
        >
          <MessageCircle width={20} fill="#3b1f06" />
        </div>
      </PopoverContent>
    </Popover>
  );
}
