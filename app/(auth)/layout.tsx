import Image from 'next/image';
import BackButton from '@/components/common/back-button';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col w-[420px] gap-5 bg-white_light">
      <div className="sticky flex flex-col items-center w-full gap-5 top-0 pt-5">
        <div className="relative size-14">
          <Image fill src="/GilaLogo.png" alt="logo-to-home" style={{ objectFit: 'contain' }} />
        </div>
        <div>
          <p className="text-3xl font-semibold">
            <span className="font-bold text-primary">길라</span>에 오신 것을 환영합니다
            <span className="text-primary">.</span>
          </p>
        </div>
      </div>
      <main className="w-full h-[calc(100vh-132px-68px)] flex flex-col justify-center">
        {children}
      </main>
      <div className="fixed bottom-0 p-4 border-t border-gray-300 w-[420px]">
        <BackButton />
      </div>
    </div>
  );
}
