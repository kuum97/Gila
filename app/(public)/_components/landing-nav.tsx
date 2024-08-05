import Image from 'next/image';
import Link from 'next/link';

export default function LandingNavigation() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between h-16 px-3 bg-white border-b bg-opacity-95">
      <div className="w-[70px] h-[60px] relative">
        <Image fill src="/GilaName.png" alt="logo-to-home" style={{ objectFit: 'contain' }} />
      </div>
      <div className="flex gap-1 text-sm font-semibold">
        <Link href="/sign-in" className="px-3 py-2 text-black rounded-md hover:text-gray-500">
          로그인
        </Link>
        <Link
          href="/sign-up"
          className="px-3 py-2 text-white rounded-3xl bg-primary hover:bg-primary_dark hover:shadow-md"
        >
          회원가입
        </Link>
      </div>
    </nav>
  );
}
