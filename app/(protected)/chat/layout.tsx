import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <nav className="flex border-b border-gray-200 p-5">
        <h1 className="font-bold">Clover Corp</h1>
      </nav>
      {children}
    </div>
  );
}
