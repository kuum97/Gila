import { ChangeEvent, FormEvent, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface Props {
  onSubmit: (text: string) => void;
}

export default function MessageInput({ onSubmit }: Props) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 bg-white">
      <Input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="메세지를 입력하세요"
      />
      <Button className="text-white font-semibold" disabled={inputValue.length === 0}>
        전송
      </Button>
    </form>
  );
}
