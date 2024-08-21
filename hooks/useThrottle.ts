import { useRef } from 'react';

interface Props {
  callback: () => void;
  limit: number;
}

const useThrottle = ({ callback, limit }: Props) => {
  const lastRun = useRef(Date.now());

  return () => {
    if (Date.now() - lastRun.current >= limit) {
      callback();
      lastRun.current = Date.now();
    }
  };
};

export default useThrottle;
