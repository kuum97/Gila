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
  defaultLocation?: string;
}

export default function LocationSelectSection({ form, className, defaultLocation }: Props) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>1. 지역</CardTitle>
      </CardHeader>
      <CardContent>
        <FormField
          control={form.control}
          name="location"
          render={({ field: { onChange } }) => (
            <FormItem>
              <FormControl>
                <LocationSelectDrawer onChange={onChange} defaultLocation={defaultLocation} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
}
