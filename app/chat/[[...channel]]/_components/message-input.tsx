import { ChangeEvent, FormEvent, useState } from 'react';
import { Input } from '@/components/ui/input';

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
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Your message here"
      />
    </form>
  );
}
