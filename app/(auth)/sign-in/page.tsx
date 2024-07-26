import Link from 'next/link';
import LoginForm from './_components/login-form';

export default function Page() {
  return (
    <div className="space-y-5 p-4">
      <LoginForm />
      <div className="mt-2 flex items-center justify-center gap-x-2">
        <p className="font-semibold">회원이 아니신가요?</p>
        <Link href="/sign-up" className="text-blue-600 underline">
          회원가입하기
        </Link>
      </div>
    </div>
  );
}
