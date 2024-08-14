import React from 'react';

interface Props {
  status: 'PENDING' | 'APPROVE' | 'REJECT';
}

const statusConfig = {
  PENDING: { textColor: 'text-blue-600', bgColor: 'bg-blue-600', text: '대기중' },
  APPROVE: { textColor: 'text-green', bgColor: 'bg-green', text: '수락됨' },
  REJECT: { textColor: 'text-red', bgColor: 'bg-red', text: '거절됨' },
};

export default function PromiseStatus({ status }: Props) {
  const { textColor, bgColor, text } = statusConfig[status];

  return (
    <div className={`${textColor} text-xs flex gap-2 items-center`}>
      <div className={`rounded-full w-2 h-2 ${bgColor}`} />
      <p>{text}</p>
    </div>
  );
}
