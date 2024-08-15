import type { Metadata } from 'next';
import KakaoScript from '@/KakaoScript';
import { extractRouterConfig } from 'uploadthing/server';
import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin';
import { ourFileRouter } from '@/app/api/uploadthing/core';
import Toaster from '@/components/ui/sonner';
import './globals.css';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
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
      <body>
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        <Toaster />
        {children}
      </body>
      <KakaoScript />
    </html>
  );
}
