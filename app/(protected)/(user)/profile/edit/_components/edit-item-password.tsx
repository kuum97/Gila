'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useState } from 'react';
import EditPasswordForm from './edit-password-form';

interface Props {
  value: string;
  triggerText: string;
}

export default function EditItemPassword({ value, triggerText }: Props) {
  const [editPassword, setEditPassword] = useState('test0444');

  return (
    <Accordion type="single" collapsible className="flex flex-col gap-8">
      <AccordionItem value={value}>
        <AccordionTrigger>
          <p className="w-20 text-sm text-black cursor-pointer">{triggerText}</p>
          <div className="flex items-center justify-between w-full mx-3">
            <p className="text-sm font-bold">{editPassword}</p>
            <span className="text-xs text-gray-400 cursor-pointer">수정하기</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <EditPasswordForm setValue={setEditPassword} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
