import { ButtonHTMLAttributes } from 'react';
import { Button } from '@/components/ui/button';
import LoadingSpinner from '../loading-spinner';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isPending?: boolean;
}

export default function PrimaryCTAButton({ text, disabled, type, isPending }: Props) {
  return (
    <div className="relative">
      {isPending && <LoadingSpinner />}
      <Button
        disabled={disabled}
        type={type}
        className="w-full py-3 text-lg font-semibold text-white disabled:bg-primary_dark"
      >
        {text}
      </Button>
    </div>
  );
}
