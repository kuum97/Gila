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
    <Accordion type="single" collapsible>
      <AccordionItem value="password" className="border-none">
        <AccordionTrigger>
          <div className="flex relative w-full">
            <p className="text-lg font-semibold text-black">{triggerText}</p>
            <span className="absolute text-xs text-gray-400 cursor-pointer right-1 top-[7px]">
              수정하기
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <EditPasswordForm />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
