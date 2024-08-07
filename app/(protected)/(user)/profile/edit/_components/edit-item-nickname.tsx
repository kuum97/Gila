'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useState } from 'react';
import EditNicknameForm from '@/app/(protected)/(user)/profile/edit/_components/edit-nickname-form';

interface Props {
  value: string;
  triggerText: string;
}

export default function EditItemNickname({ value, triggerText }: Props) {
  const [editNickname, setEditNickname] = useState(value);

  return (
    <Accordion type="single" collapsible className="flex flex-col gap-8">
      <AccordionItem value={value}>
        <AccordionTrigger>
          <div className="flex items-center justify-between w-full px-3">
            <p className="w-20 text-lg font-semibold">{triggerText}</p>
            <div className="flex items-center justify-between w-full mx-3">
              <p className="text-xl font-bold">{editNickname}</p>
              <span className="text-xs text-gray-400 cursor-pointer">수정하기</span>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <EditNicknameForm setValue={setEditNickname} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
