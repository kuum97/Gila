import BackButton from '@/components/common/back-button';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative max-w-[420px]">
      <div className="sticky top-0 p-5 z-30">
        <BackButton />
      </div>
      {children}
    </div>
  );
}
