import BackButton from '@/components/common/back-button';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <div className="p-2 flex justify-end">
        <BackButton />
      </div>
      {children}
    </div>
  );
}
