'use client';

import * as React from 'react';
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
import { RefreshCcw } from 'lucide-react';

export default function LocationCombobox() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [location, setLocation] = React.useState<string>('');
  const [subLocation, setSubLocation] = React.useState<string>('');

  const handleSelectValue = React.useCallback(
    (currentValue: string) => {
      setLocation(currentValue === location ? '' : currentValue);
    },
    [location],
  ); // 현재 도, 광역시, 특별시 결정

  const handleSelectSubLocation = React.useCallback(
    (currentValue: string) => {
      setSubLocation(currentValue === subLocation ? '' : currentValue);
      setOpen(false);
    },
    [subLocation],
  ); // 세부 행정구역 결정

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
          <CommandList className="flex justify-center w-[350x] p-1 relative">
            {location || (
              <CommandGroup heading="도・광역시・특별시">
                <ul className="grid grid-cols-3 gap-3 mt-1">
                  {Object.keys(LOCATIONS).map((province) => (
                    <CommandItem
                      key={province}
                      value={province}
                      onSelect={handleSelectValue}
                      className="flex items-center justify-center w-full border rounded-lg hover:bg-gray-100"
                    >
                      {province}
                    </CommandItem>
                  ))}
                </ul>
              </CommandGroup>
            )}
            {location && (
              <CommandGroup>
                <ul className="grid grid-cols-3 gap-3 mt-1">
                  {subLocations.map((city) => (
                    <CommandItem
                      key={city}
                      value={city}
                      onSelect={handleSelectSubLocation}
                      className="flex items-center justify-center w-full border rounded-lg hover:bg-gray-100"
                    >
                      {city}
                    </CommandItem>
                  ))}
                </ul>
              </CommandGroup>
            )}
            <div className="absolute flex justify-end right-3 top-1.5">
              <Button
                type="button"
                onClick={() => {
                  setLocation('');
                  setSubLocation('');
                }}
                className="flex items-center justify-center p-1 text-white bg-black rounded-full size-6"
              >
                <RefreshCcw className="size-full" />
              </Button>
            </div>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
