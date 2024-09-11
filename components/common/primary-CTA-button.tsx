import { ButtonHTMLAttributes } from 'react';
import { Button } from '@/components/ui/button';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export default function PrimaryCTAButton({ text, disabled, type }: Props) {
  return (
    <Button
      disabled={disabled}
      type={type}
      className="w-full py-3 text-lg font-semibold text-white disabled:bg-primary_dark"
    >
      {text}
    </Button>
  );
}
