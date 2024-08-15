/* eslint-disable jsx-a11y/anchor-is-valid */

'use client';

import { Copy, Link } from 'lucide-react';
import Image from 'next/image';

export default function GilaLayout() {
  const testId = 'test@mail.com';
  const testPassword = 'test1234';

  const copyLink = async (text: string) => {
    await navigator.clipboard.writeText(text);
    // eslint-disable-next-line no-alert
    alert(`복사했습니다!`);
  };

  return (
    <div className="sticky top-0 h-screen items-center w-[400px] flex flex-col justify-center gap-5">
      <Image src="/logo.png" alt="로고" width={200} height={150} />
      <h1 className="text-4xl font-bold text-center">
        당신의 <span className="text-primary">길라잡이</span>가
        <br /> 되어드릴께요!
      </h1>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <p>테스트 id: {testId}</p>
          <span onClick={() => copyLink(testId)}>
            <Copy width={20} height={20} />
          </span>
        </div>
        <div className="flex items-center gap-2">
          <p>테스트 password: {testPassword}</p>
          <span onClick={() => copyLink(testPassword)}>
            <Copy width={20} height={20} />
          </span>
        </div>
      </div>
      <a className="flex items-center gap-2" href="https://github.com/Gila-part4/Gila">
        <p className="font-semibold text-lg">Project GitHub</p>
        <Link width={20} height={20} />
      </a>
    </div>
  );
}
