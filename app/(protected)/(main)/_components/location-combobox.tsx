'use client';

import * as React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { LOCATIONS } from '@/constants/locations';

export default function LocationCombobox() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [location, setLocation] = React.useState<string>('');
  const [subLocation, setSubLocation] = React.useState<string>('');

  const handleSelectValue = React.useCallback(
    (currentValue: string) => {
      setLocation(currentValue === location ? '' : currentValue);
    },
    [location],
  ); // 현재 대분류 상태 설정

  const handleSelectSubLocation = React.useCallback(
    (currentValue: string) => {
      setSubLocation(currentValue === subLocation ? '' : currentValue);
      setOpen(false);
    },
    [subLocation],
  );

  const subLocations = React.useMemo(() => {
    return location ? LOCATIONS[location] : [];
  }, [location]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full shadow-sm rounded-3xl"
        >
          {subLocation
            ? `${location} ${LOCATIONS[location].find(
                (currentSubLocation) => currentSubLocation === subLocation,
              )}`
            : '어디로 떠나시나요?'}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 bg-white">
        <Command>
          <CommandInput placeholder="목적지를 찾아보세요!" />
          <CommandEmpty>그런 지역은 없어요</CommandEmpty>
          <Button
            type="button"
            onClick={() => {
              setLocation('');
              setSubLocation('');
            }}
            className="text-white bg-black rounded-none"
          >
            초기화
          </Button>
          <CommandList className="flex">
            {location || (
              <CommandGroup heading="대분류" className="flex">
                {Object.keys(LOCATIONS).map((province) => (
                  <CommandItem
                    key={province}
                    value={province}
                    onSelect={handleSelectValue}
                    className="flex hover:bg-gray-100"
                  >
                    {province}
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
            {location && (
              <CommandGroup heading="소분류" className="flex">
                {subLocations.map((city) => (
                  <CommandItem
                    key={city}
                    value={city}
                    onSelect={handleSelectSubLocation}
                    className="flex hover:bg-gray-100"
                  >
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        city === subLocation ? 'opacity-100' : 'opacity-0',
                      )}
                    />
                    {city}
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
