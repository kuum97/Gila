import { LoaderCircle } from 'lucide-react';

export default function Spinner() {
  return (
    <div className="h-10">
      <LoaderCircle className="animate-spin" />
    </div>
  );
}
