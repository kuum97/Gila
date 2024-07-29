import Link from 'next/link';
import RegisterForm from './_components/register-form';

export default function Page() {
  return (
    <div className="space-y-5 p-4">
      <RegisterForm />
      <div className="mt-2 flex items-center justify-center gap-x-2">
        <p className="font-semibold">이미 회원이신가요?</p>
        <Link href="/sign-in" className="text-sky-500 underline">
          로그인하기
        </Link>
      </div>
    </div>
  );
}
