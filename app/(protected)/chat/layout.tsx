import BackButton from '@/components/common/back-button';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative max-w-[420px]">
      <div className="tall:sticky fixed left-0 top-0 p-4 z-30">
        <BackButton />
      </div>
      {children}
    </div>
  );
}
