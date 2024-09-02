import { Button } from '@/components/ui/button';

interface Props {
  text: string;
  disabledOption?: boolean;
}

export default function SubmitButton({ text, disabledOption }: Props) {
  return (
    <Button
      disabled={disabledOption}
      type="submit"
      className="w-full py-3 text-lg font-semibold text-white disabled:bg-primary_dark"
    >
      {text}
    </Button>
  );
}
