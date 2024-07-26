import React from 'react';

interface Props {
  status: 'PENDING' | 'APPROVE' | 'REJECT';
}

export default function PromiseStatus({ status }: Props) {
  let statusText = '';
  let statusColor = '';

  switch (status) {
    case 'PENDING':
      statusText = '대기중';
      statusColor = 'test-black';
      break;
    case 'APPROVE':
      statusText = '수락됨';
      statusColor = 'text-green';
      break;
    case 'REJECT':
      statusText = '거절됨';
      statusColor = 'text-red';
      break;
    default:
      statusText = '알 수 없음';
      statusColor = 'text-gray-500';
  }
  return <div className={`text-xs ${statusColor}`}>{statusText}</div>;
}
