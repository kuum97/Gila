import Image from 'next/image';
import GilaName from '@/public/GilaName.png';
import Background from '@/public/LandingBackground.jpg';
import GilaLogo from '@/public/GilaLogo.png';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center overflow-y-scroll">
      <div className="flex flex-col justify-center items-center pt-20 gap-3">
        <h1 className="text-4xl text-center font-bold">
          당신의 <span className="text-primary">길라잡이</span>가
          <br /> 되어드릴께요!
        </h1>
        <Image src={GilaName} alt="길라 이름 이미지" height={100} />
        <Link
          href="/sign-in"
          className="w-32 h-10 bg-primary px-3 py-2 rounded-md text-center font-semibold"
        >
          로그인하기
        </Link>
        <Image src={Background} alt="랜딩페이지 배경이미지" className="translate-y-0.5" />
      </div>
      <div className="bg-stone-200 w-screen flex flex-col items-center space-y-20">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-3xl font-semibold ">&quot; 짧은 경험 &quot;</h2>
          <p>우리는 경험을 길이에 비추어 설명하곤 합니다.</p>
          <p>당신의 길이는 어떤가요?</p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <Image src={GilaLogo} alt="길라 로고 이미지" height={70} />
          <div className="flex flex-col items-center gap-1">
            <p className="text-center">
              <span className="text-2xl font-semibold text-primary">GILA</span>가 여러분을 잇는
              <br />
              매듭이 되어 드릴께요.
            </p>
            <p className="text-center">
              <span className="text-2xl font-semibold text-primary">GILA</span>에서 여러 형태의
              <br />
              매듭을 연결해보세요.
            </p>
          </div>
        </div>
        <div>
          <div className="bg-white w-72 h-full rounded-lg flex flex-col items-center p-4 gap-3">
            <p className="text-xl">
              직접 <span className="text-2xl font-semibold text-primary">길라</span>가 되어보세요!
            </p>
            <p className="text-sm text-gray_600">내가 가이드가 되어서 매듭을 묶어보세요.</p>
            <div className="w-full h-44 bg-gray_500 rounded-md">이미지</div>
          </div>
        </div>
        <div>
          <div className="bg-white w-72 h-full rounded-lg flex flex-col items-center p-4 gap-3">
            <p className="text-xl">
              직접 <span className="text-2xl font-semibold text-primary">길라</span>에게 물어보세요!
            </p>
            <p className="text-sm text-gray_600 text-center">
              궁금한 것들은 언제든지, 무엇이든지
              <br />
              길라들에게 물어보세요.
            </p>
            <div className="w-full h-44 bg-gray_500 rounded-md">이미지</div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 pb-20">
          <p className="text-3xl font-semibold">가능성은 무한합니다!</p>
          <p className="text-3xl font-semibold">
            <span className="text-3xl font-semibold text-primary">GILA</span>와 함께해요!
          </p>
        </div>
      </div>
    </div>
  );
}
