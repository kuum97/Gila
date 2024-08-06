import React from 'react';

interface Props {
  status: 'PENDING' | 'APPROVE' | 'REJECT';
}

export default function PromiseStatus({ status }: Props) {
  let statusColor = '';

  switch (status) {
    case 'PENDING':
      statusColor = 'bg-blue-600';
      break;
    case 'APPROVE':
      statusColor = 'bg-green';
      break;
    case 'REJECT':
      statusColor = 'bg-red';
      break;
    default:
      statusColor = 'bg-blue-600';
  }
  return <div className={`rounded-full size-2 ${statusColor}`} />;
}
