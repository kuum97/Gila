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
    <Accordion type="single" collapsible>
      <AccordionItem value={value} className="border-none">
        <AccordionTrigger>
          <div className="flex relative flex-col items-start justify-between w-full">
            <p className="text-lg font-semibold">{triggerText}</p>
            <p className="text-xl font-bold">{editNickname}</p>
            <span className="absolute text-xs text-gray-400 right-1 top-5 cursor-pointer">
              수정하기
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <EditNicknameForm setValue={setEditNickname} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
