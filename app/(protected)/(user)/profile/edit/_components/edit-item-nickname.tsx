'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useEffect, useState } from 'react';
import EditNicknameForm from './edit-nickname-form';
import { getCurrentUserEmail } from '@/app/data/user';

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
          <p className="w-20 text-sm text-black cursor-pointer">{triggerText}</p>
          <div className="flex items-center justify-between w-full mx-3">
            <p className="text-sm font-bold">{editNickname}</p>
            <span className="text-xs text-gray-400 cursor-pointer">수정하기</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <EditNicknameForm setValue={setEditNickname} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
