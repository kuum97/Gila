import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ProfileForm() {
  return (
    <div>
      <div className="flex items-center w-full max-w-sm space-x-2">
        <Input type="email" placeholder="Email" />
        <Button type="submit">Subscribe</Button>
      </div>
    </div>
  );
}
