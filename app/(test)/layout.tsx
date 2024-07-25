import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-stone-200 flex items-center justify-center">
      <div className="flex flex-col gap-y-4">
        <Button asChild>
          <Link href={'/test-action'}>back home</Link>
        </Button>
        {children}
      </div>
    </div>
  );
}
