import Image from 'next/image';
import BackButton from '@/components/common/back-button';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col max-w-[420px] bg-white_light tall:w-[420px] tall:h-full h-[calc(100vh-68px)] gap-5 tall:gap-0">
      <div className="flex flex-col items-center w-full gap-5 top-0 pt-5">
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
      <main className="w-full tall:h-[calc(100vh-132px-68px)] flex flex-col justify-center pb-20 tall:pb-0">
        {children}
      </main>
      <div className="tall:sticky fixed bottom-0 p-4 border-t border-gray-300 left-0 w-screen bg-[#ffffff] tall:w-full">
        <BackButton />
      </div>
    </div>
  );
}
