import { Loader } from 'lucide-react';

export default function LoadingSpinner() {
  return (
    <div
      className="absolute inset-0 z-10 flex items-center justify-center rounded-md cursor-not-allowed bg-gray-400/50"
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
      }}
    >
      <Loader className="w-8 h-8 animate-spin" />
    </div>
  );
}
