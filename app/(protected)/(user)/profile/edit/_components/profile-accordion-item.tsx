'use client';

import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { z } from 'zod';
import ProfileForm from './profile-form';

export default function ProfileAccordionItem({
  value,
  triggerText,
  displayText,
  schema,
  defaultValues,
  name,
  label,
  placeholder,
  type,
  onSubmit,
}) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger>
        <p className="w-20 text-sm text-black cursor-pointer">{triggerText}</p>
        <div className="flex items-center justify-between w-full mx-3">
          <p className="text-sm font-bold">{displayText}</p>
          <span className="text-xs text-gray-400 cursor-pointer">수정하기</span>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <ProfileForm
          schema={schema}
          defaultValues={defaultValues}
          name={name}
          label={label}
          placeholder={placeholder}
          type={type}
          onSubmit={onSubmit}
        />
      </AccordionContent>
    </AccordionItem>
  );
}
