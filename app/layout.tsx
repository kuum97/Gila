import type { Metadata } from 'next';
import { extractRouterConfig } from 'uploadthing/server';
import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin';
import { ourFileRouter } from '@/app/api/uploadthing/core';
import Toaster from '@/components/ui/sonner';
import GilaLayout from './_components/gila-layout';
import './globals.css';

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
        <div className="w-full tall:my-0 tall:mx-auto tall:flex justify-center">
          <GilaLayout />
          <div className="max-w-[420px] mx-auto tall:mx-0">{children}</div>
        </div>
      </body>
    </html>
  );
}
