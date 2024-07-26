import Image from 'next/image';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 overflow-hidden bg-white">
      <Link href="/">
        <Image width={250} height={250} src="/GilaName.png" alt="logo-to-home" />
      </Link>
      <main className="w-[450px] px-10">{children}</main>
    </div>
  );
}
