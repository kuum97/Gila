import type { Metadata } from 'next';
import KakaoScript from '@/KakaoScript';
import { extractRouterConfig } from 'uploadthing/server';
import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin';
import { ourFileRouter } from '@/app/api/uploadthing/core';
import Toaster from '@/components/ui/sonner';
import './globals.css';
import GilaLayout from './_components/gila-layout';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Kakao: any;
  }
}

export const metadata: Metadata = {
  title: 'Gila',
  description: '국내 어디든지 여행지의 현지인과 인연을 맺어보세요!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="relative">
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        <Toaster />
        <div className="w-full md:my-0 md:mx-auto md:flex justify-center">
          <GilaLayout />
          <div className="border max-w-[420px] mx-auto md:mx-0">{children}</div>
        </div>
      </body>
      <KakaoScript />
    </html>
  );
}
