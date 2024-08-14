import Image from 'next/image';

export default function GilaLayout() {
  return (
    <div className="sticky top-0 h-screen items-center w-[400px] flex flex-col justify-center gap-5">
      <Image src="/logo.png" alt="로고" width={200} height={150} />
      <h1 className="text-4xl font-bold text-center">
        당신의 <span className="text-primary">길라잡이</span>가
        <br /> 되어드릴께요!
      </h1>
      <div>
        <p>테스트 id: test</p>
        <p>테스트 password: test</p>
      </div>
    </div>
  );
}
