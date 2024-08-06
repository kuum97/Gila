'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Button } from '@/components/ui/button';
import {
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Drawer,
  DrawerFooter,
  DrawerClose,
  DrawerDescription,
} from '@/components/ui/drawer';
import LOCATIONS from '@/constants/locations';
import { Compass } from 'lucide-react';

export default function LocationSelectDrawerForNav() {
  const [province, setProvince] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const router = useRouter();

  const cities = useMemo(() => {
    return province ? LOCATIONS[province] : [];
  }, [province]);

  const handleSelectLocation = (location: string) => {
    if (province) {
      const fullLocation = `${province} ${location}`;
      setSelectedLocation(fullLocation);
      router.push(`?location=${encodeURIComponent(fullLocation)}`);
    }
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          type="button"
          className="flex items-center justify-between w-full gap-1 text-base font-semibold border shadow-md bg-white_light rounded-3xl hover:bg-gray-200"
        >
          어디로 떠나실래요?
          <Compass className="size-5" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-white_light">
        <DrawerHeader>
          <DrawerTitle className="text-2xl">지역을 선택하세요</DrawerTitle>
          <DrawerDescription className="">
            도・광역시・특별시를 먼저 선택하시고 시・군・구를 선택해 주세요.
            <span className="text-xs text-gray-800">(세종특별자치시 제외)</span>
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4">
          <Command>
            <CommandList className="flex p-2 relative justify-center shadow-[inset_0_0_5px_rgb(0,0,0,0.1)]">
              <CommandEmpty>디폴트 이미지 넣을 예정</CommandEmpty>
              {province === null && (
                <CommandGroup>
                  <ul className="grid grid-cols-3 gap-3">
                    {Object.keys(LOCATIONS).map((_province) => (
                      <CommandItem
                        key={_province}
                        value={_province}
                        onSelect={(value) => {
                          setSelectedLocation(null);
                          setProvince(value);
                        }}
                        className="flex items-center justify-center p-2 font-medium rounded-lg shadow-md hover:bg-gray-100"
                      >
                        {_province}
                      </CommandItem>
                    ))}
                  </ul>
                </CommandGroup>
              )}
              {province && cities.length > 0 && (
                <CommandGroup>
                  <ul className="grid grid-cols-3 gap-3">
                    {cities.map((city) => (
                      <CommandItem
                        key={city}
                        value={city}
                        onSelect={handleSelectLocation}
                        className="flex items-center justify-center p-2 font-medium rounded-lg shadow-md hover:bg-gray-100"
                      >
                        {city}
                      </CommandItem>
                    ))}
                  </ul>
                </CommandGroup>
              )}
            </CommandList>
          </Command>
        </div>
        <DrawerFooter>
          <Button
            type="button"
            onClick={() => {
              setProvince(null);
              setSelectedLocation(null);
              router.push('?'); // Reset the URL when clearing selections
            }}
            className="text-base text-white shadow-md bg-slate-800"
          >
            초기화
          </Button>
          <DrawerClose asChild>
            <Button variant="outline" className="text-base text-white shadow-md bg-primary">
              확정
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
