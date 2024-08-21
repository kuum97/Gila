import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  isDisabled: boolean;
  handleClick: () => void;
  direction: 'left' | 'right';
}

export default function SlideButton({ isDisabled, handleClick, direction }: Props) {
  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={handleClick}
      className={`absolute ${direction === 'left' ? 'left-2' : 'right-2'} z-30 top-1/2 -translate-y-1/2 bg-gray_100 opacity-70 rounded-full w-12 h-12 flex items-center justify-center`}
    >
      {direction === 'left' ? (
        <ChevronLeft width={40} height={40} color={isDisabled ? 'gray' : 'black'} />
      ) : (
        <ChevronRight width={40} height={40} color={isDisabled ? 'gray' : 'black'} />
      )}
    </button>
  );
}
