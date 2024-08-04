'use client';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { Accordion } from '@/components/ui/accordion';
import { Undo2 } from 'lucide-react';
import LocationSelectSection from '@/app/(protected)/(user)/(dashboard)/my-activity/_components/location-select-section';
import ScheduleSection from '@/app/(protected)/(user)/(dashboard)/my-activity/_components/schedule-section';
import DetailInfoSection from '@/app/(protected)/(user)/(dashboard)/my-activity/_components/detail-info-section';
import { useTransition } from 'react';
import { createActivity } from '@/app/action/activity';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const ActivityCreateFormSchema = z.object({
  title: z.string(),
  tags: z.string().array(),
  description: z.string(),
  schedule: z.object({ from: z.date(), to: z.date() }),
  location: z.string(),
  images: z.string().array(),
  maximumCount: z.number().min(1),
});

export type ActivityCreateFormData = z.infer<typeof ActivityCreateFormSchema>;

export interface ActivityCreateFormProps {
  form: UseFormReturn<ActivityCreateFormData>;
}

export default function ActivityCreateForm() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const form = useForm<ActivityCreateFormData>({
    resolver: zodResolver(ActivityCreateFormSchema),
    defaultValues: {
      title: '',
      description: '',
      location: '',
      tags: [],
      images: [],
      maximumCount: 1,
    },
  });

  const selectLocation = (location: string) => {
    form.setValue('location', location);
    form.clearErrors('location');
  };

  const onSubmit = ({
    title,
    description,
    schedule,
    tags,
    location,
    maximumCount,
  }: ActivityCreateFormData) => {
    startTransition(async () => {
      const { from, to } = schedule;

      const action = await createActivity({
        title,
        description,
        tags,
        thumbnails: [],
        location,
        startDate: from,
        endDate: to,
        maximumCount,
      });
      if (!action.success) {
        toast.error(action.message);
        return;
      }
      toast.success(action.message);
      router.replace('/activity-list');
    });
  };

  return (
    <Form {...form}>
      <main className="min-h-screen bg-white">
        <div className="mb-5">
          <button
            type="button"
            aria-label="back-btn"
            className="bg-[#ffffff] p-1 rounded-full shadow-md border hover:bg-slate-200"
          >
            <Undo2 />
          </button>
        </div>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <Accordion
            type="single"
            className="flex flex-col gap-5"
            collapsible
            defaultValue="item-1"
          >
            <LocationSelectSection
              className="bg-[#ffffff]"
              form={form}
              selectLocation={selectLocation}
            />
            <ScheduleSection className="bg-[#ffffff]" form={form} />
            <DetailInfoSection className="bg-[#ffffff]" form={form} />
          </Accordion>
          <Button
            disabled={isPending}
            type="submit"
            className="w-full text-xl font-semibold text-black shadow-md py-7"
          >
            제출
          </Button>
        </form>
      </main>
    </Form>
  );
}
