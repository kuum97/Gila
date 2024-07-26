import { ReactNode } from 'react';
import NavgationWithCombobox from './_components/nav-with-combobox';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <NavgationWithCombobox />
      {children}
    </div>
  );
}
