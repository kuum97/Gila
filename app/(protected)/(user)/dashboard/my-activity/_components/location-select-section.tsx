'use client';

import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { ActivityCreateFormProps } from '@/app/(protected)/(user)/dashboard/my-activity/_components/activity-create-form';
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
import { useCallback, useMemo, useState } from 'react';
import LOCATIONS from '@/constants/locations';

interface Props extends ActivityCreateFormProps {
  selectLocation: (location: string) => void;
  className?: string;
}

export default function LocationSelectSection({ form, selectLocation, className }: Props) {
  const [location, setLocation] = useState<string>('');
  const [subLocation, setSubLocation] = useState<string>('');

  const handleSelectValue = useCallback(
    (currentValue: string) => {
      setLocation(currentValue === location ? '' : currentValue);
    },
    [location],
  ); // 현재 도, 광역시, 특별시 결정

  const handleSelectSubLocation = useCallback(
    (currentValue: string) => {
      setSubLocation(currentValue === subLocation ? '' : currentValue);
      selectLocation(subLocation ? `${location} ${currentValue}` : `${location}`);
    },
    [subLocation, location, selectLocation],
  ); // 세부 행정구역 결정

  const subLocations = useMemo(() => {
    return location ? LOCATIONS[location] : [];
  }, [location]);

  return (
    <AccordionItem className={className} value="item-1" asChild>
      <Card className="shadow-md">
        <AccordionTrigger className="p-0">
          <CardHeader>
            <CardTitle>지역</CardTitle>
          </CardHeader>
        </AccordionTrigger>
        <AccordionContent asChild>
          <CardContent>
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <h2 className="text-lg font-semibold">
                      {field.value && subLocation
                        ? `${location} ${LOCATIONS[location].find(
                            (currentSubLocation) => currentSubLocation === subLocation,
                          )}`
                        : `${location}`}
                    </h2>
                  </FormControl>
                  <FormMessage />
                  <Command>
                    <Card>
                      <CommandInput className="bg-[#ffffff]" placeholder="지역을 검색해 보세요!" />
                      <CommandList className="flex justify-center p-1 relative shadow-[inset_0_0_5px_rgb(0,0,0,0.08)]">
                        <CommandEmpty>디폴트 이미지 넣을 예정</CommandEmpty>
                        {!location ? (
                          <CommandGroup heading="도・광역시・특별시">
                            <ul className="flex flex-wrap gap-3">
                              {Object.keys(LOCATIONS).map((province) => (
                                <CommandItem
                                  key={province}
                                  value={province}
                                  onSelect={handleSelectValue}
                                  className="flex items-center justify-center p-2 border rounded-lg hover:bg-gray-100"
                                >
                                  {province}
                                </CommandItem>
                              ))}
                            </ul>
                          </CommandGroup>
                        ) : (
                          <CommandGroup>
                            <ul className="flex flex-wrap gap-3">
                              {subLocations.map((city) => (
                                <CommandItem
                                  key={city}
                                  value={city}
                                  onSelect={handleSelectSubLocation}
                                  className="flex items-center justify-center p-2 border rounded-lg hover:bg-gray-100"
                                >
                                  {city}
                                </CommandItem>
                              ))}
                            </ul>
                          </CommandGroup>
                        )}
                        <div className="absolute flex justify-end right-1.5 top-1.5">
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
                    </Card>
                  </Command>
                </FormItem>
              )}
            />
          </CardContent>
        </AccordionContent>
      </Card>
    </AccordionItem>
  );
}
