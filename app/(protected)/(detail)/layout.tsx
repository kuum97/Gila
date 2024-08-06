import CloseButton from '@/components/common/close-button';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="flex p-2 w-full flex-row-reverse">
        <CloseButton />
      </div>
      {children}
    </div>
  );
}
