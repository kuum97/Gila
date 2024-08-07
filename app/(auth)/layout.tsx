import Image from 'next/image';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen gap-2 bg-white_light">
      <div className="fixed flex flex-col items-center w-full gap-5 pb-5 top-5">
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
      <main className="w-full">{children}</main>
      <div className="fixed bottom-0 w-full p-4 border-t border-gray-300">
        <BackButton />
      </div>
    </div>
  );
}
