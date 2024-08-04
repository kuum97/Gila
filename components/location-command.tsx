'use client';

import { LOCATIONS } from '@/constants/locations';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Button } from '@/components/ui/button';
import { RefreshCcw } from 'lucide-react';
import useLocationSelect from '@/hooks/useLocationSelect';

export default function LocationCommand() {
  const { handleClickResetLocation, handleSelectCity, handleSelectProvince, cities, province } =
    useLocationSelect();

  return (
    <Command>
      <CommandInput placeholder="목적지를 찾아보세요!" />
      <CommandList className="relative flex justify-center p-1">
        <CommandEmpty>디폴트 이미지</CommandEmpty>
        {!province ? (
          <CommandGroup heading="도・광역시・특별시">
            <ul className="flex flex-col flex-wrap w-full gap-3">
              {Object.keys(LOCATIONS).map((_province) => (
                <CommandItem
                  key={_province}
                  value={_province}
                  onSelect={handleSelectProvince}
                  className="flex items-center justify-center p-2 border rounded-lg hover:bg-gray-100"
                >
                  {_province}
                </CommandItem>
              ))}
            </ul>
          </CommandGroup>
        ) : (
          <CommandGroup heading="시・군・구">
            <ul className="flex flex-col flex-wrap w-full gap-3">
              {cities.map((_city) => (
                <CommandItem
                  key={_city}
                  value={_city}
                  onSelect={handleSelectCity}
                  className="flex items-center justify-center p-2 border rounded-lg hover:bg-gray-100"
                >
                  {_city}
                </CommandItem>
              ))}
            </ul>
          </CommandGroup>
        )}
        <div className="absolute flex justify-end right-3 top-1.5">
          <Button
            type="button"
            onClick={handleClickResetLocation}
            className="flex items-center justify-center p-1 text-white bg-black rounded-full size-6"
          >
            <RefreshCcw className="size-full" />
          </Button>
        </div>
      </CommandList>
    </Command>
  );
}
