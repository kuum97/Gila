import React from 'react';

interface Props {
  status: 'PENDING' | 'APPROVE' | 'REJECT';
}

export default function PromiseStatus({ status }: Props) {
  let statusColor = '';

  switch (status) {
    case 'PENDING':
      statusColor = 'bg-black';
      break;
    case 'APPROVE':
      statusColor = 'bg-green';
      break;
    case 'REJECT':
      statusColor = 'bg-red';
      break;
    default:
      statusColor = 'bg-gray-500';
  }
  return <div className={`absolute top-2 right-2 w-2 h-2 rounded-full ${statusColor}`} />;
}
