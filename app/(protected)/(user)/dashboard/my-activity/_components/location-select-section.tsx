'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { ActivityCreateFormProps } from '@/app/(protected)/(user)/dashboard/my-activity/_components/activity-create-form';
import LocationSelectDrawer from '@/components/location-select-drawer';

interface Props extends ActivityCreateFormProps {
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
