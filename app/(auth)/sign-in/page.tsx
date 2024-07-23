import Link from 'next/link';
import LoginForm from './_components/login-form';

export default function Page() {
  return (
    <>
      <LoginForm />

      <div className="mt-2 flex items-center justify-center gap-x-2">
        회원이 아니신가요?
        <Link href="/sign-up" className="text-sky-500 underline">
          회원가입하기
        </Link>
      </div>
    </>
  );
}
