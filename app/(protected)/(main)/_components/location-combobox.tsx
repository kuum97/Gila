'use client';

import LocationCommand from '@/components/location-command';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function LocationCombobox() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const searchParams = useSearchParams();

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={isOpen}
          className="w-full shadow-sm rounded-3xl text-base text-black font-bold bg-[#ffffff]"
        >
          {searchParams.get('location') || '어디로 떠나실래요?'}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 bg-white" asChild>
        <LocationCommand />
      </PopoverContent>
    </Popover>
  );
}
