import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <div className="relative max-w-[420px]">{children}</div>;
}
