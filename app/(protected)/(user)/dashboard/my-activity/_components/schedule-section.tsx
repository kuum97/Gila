import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FormField, FormItem } from '@/components/ui/form';
import { ActivityCreateFormProps } from './activity-create-form';

export default function ScheduleSection({ form }: ActivityCreateFormProps) {
  return (
    <AccordionItem className="bg-[#ffffff]" value="item-2" asChild>
      <Card className="shadow-md">
        <AccordionTrigger className="p-0">
          <CardHeader>
            <CardTitle>일정</CardTitle>
          </CardHeader>
        </AccordionTrigger>
        <AccordionContent>
          <CardContent>
            <FormField
              control={form.control}
              name="schedule"
              render={({ field }) => (
                <FormItem>
                  <Calendar
                    mode="range"
                    defaultMonth={field.value?.from}
                    selected={field.value}
                    onSelect={field.onChange}
                    numberOfMonths={2}
                    disabled={(date) => date < new Date()}
                    initialFocus
                  />
                </FormItem>
              )}
            />
          </CardContent>
        </AccordionContent>
      </Card>
    </AccordionItem>
  );
}
