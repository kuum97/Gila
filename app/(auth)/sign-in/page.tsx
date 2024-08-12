import Link from 'next/link';
import LoginForm from '@/app/(auth)/sign-in/_components/login-form';
import { AccountItem } from './_components/account-item';

export const accounts = [
  { label: 'email', value: 'test@mail.com' },
  { label: 'password', value: 'test1234' },
];

export default function Page() {
  return (
    <div className="flex flex-col gap-5 px-5">
      <LoginForm />
      <div className="flex items-center justify-center gap-x-2">
        <p className="text-gray-500">
          길라가 처음인가요?{' '}
          <Link
            href="/sign-up"
            className="font-semibold underline text-primary hover:text-primary_dark focus:text-primary_dark"
          >
            회원가입하기
          </Link>
        </p>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-bold">테스트 계정</h3>
        {accounts.map((account, index) => (
          <AccountItem key={index} label={account.label} value={account.value} />
        ))}
      </div>
    </div>
  );
}
