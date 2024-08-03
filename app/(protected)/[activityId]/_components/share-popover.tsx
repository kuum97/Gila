/* eslint-disable jsx-a11y/anchor-is-valid */
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ExternalLink, Link, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function SharePopover({ activityId }: { activityId: string }) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/${activityId}`;

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
        description: '길라와 같이 떠나자',
        imageUrl: '',
        link: {
          mobileWebUrl: url,
        },
      },
      buttons: [
        {
          title: '새로운 경험하러 가기',
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
        <ExternalLink width={20} />
      </PopoverTrigger>
      <PopoverContent className="bg-white w-full flex gap-4">
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
