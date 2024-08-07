'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import EditPasswordForm from '@/app/(protected)/(user)/profile/edit/_components/edit-password-form';

interface Props {
  triggerText: string;
}

export default function EditItemPassword({ triggerText }: Props) {
  return (
    <Accordion type="single" collapsible className="flex flex-col gap-8">
      <AccordionItem value="password">
        <AccordionTrigger>
          <div className="flex justify-between w-full px-3">
            <p className="w-20 text-lg font-semibold text-black cursor-pointer">{triggerText}</p>
            <span className="mr-2 text-xs text-gray-400 cursor-pointer">수정하기</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <EditPasswordForm />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
