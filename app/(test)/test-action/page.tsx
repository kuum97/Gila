import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function Page() {
  return (
    <div className="space-y-4 flex flex-col">
      <Button asChild>
        <Link href="/test-action/activity">activity</Link>
      </Button>
      <Button asChild>
        <Link href="/test-action/question">question</Link>
      </Button>
    </div>
  );
}
