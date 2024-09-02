import { ReactNode } from 'react';
import NavigationBase from '@/components/common/nav-base';
import KakaoScript from '@/KakaoScript';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="tall:w-[420px]">
      <NavigationBase />
      <div className="max-h-[calc(100vh-64px)] overflow-y-scroll">{children}</div>
      <KakaoScript />
    </div>
  );
}
