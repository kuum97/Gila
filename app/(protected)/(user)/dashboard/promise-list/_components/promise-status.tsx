import React from 'react';

interface Props {
  status: 'PENDING' | 'APPROVE' | 'REJECT';
}

const statusConfig = {
  PENDING: { color: 'blue-600', text: '대기중' },
  APPROVE: { color: 'green', text: '수락됨' },
  REJECT: { color: 'red', text: '거절됨' },
};

export default function PromiseStatus({ status }: Props) {
  const { color, text } = statusConfig[status];

  return (
    <div className={`text-${color} text-sm flex gap-2 items-center`}>
      <div className={`rounded-full size-2 bg-${color}`} />
      {text}
    </div>
  );
}
