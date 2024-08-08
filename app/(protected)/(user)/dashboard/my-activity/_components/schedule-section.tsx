import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { ActivityCreateFormProps } from '@/app/(protected)/(user)/dashboard/my-activity/_components/activity-create-form';
import { useEffect, useState } from 'react';
import { DateRange } from 'react-day-picker';

interface Props extends ActivityCreateFormProps {
  className?: string;
  defaultSchedule?: { from: Date; to: Date };
}

export default function ScheduleSection({ form, className, defaultSchedule }: Props) {
  const [selectedSchedule, setSelectedSchedule] = useState<DateRange | undefined>();

  const isDisabled = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const compareDate = new Date(date);
    compareDate.setHours(0, 0, 0, 0);

    return compareDate < today;
  };

  useEffect(() => {
    if (defaultSchedule) setSelectedSchedule(defaultSchedule);
  }, [defaultSchedule]);

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>2. 일정</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center">
        <FormField
          control={form.control}
          name="schedule"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Calendar
                  mode="range"
                  defaultMonth={field.value?.from}
                  selected={selectedSchedule}
                  onSelect={(e: DateRange | undefined) => {
                    setSelectedSchedule(e);
                    field.onChange(e);
                  }}
                  numberOfMonths={2}
                  disabled={isDisabled}
                  initialFocus
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
}
