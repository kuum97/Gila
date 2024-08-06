import Image from 'next/image';

export default function LandingMainSection() {
  return (
    <main className="flex flex-col items-center w-screen gap-5 bg-white_light">
      <div className="flex flex-col items-center gap-2">
        <h2 className="mb-1 text-3xl font-semibold">&quot; 짧은 경험 &quot;</h2>
        <p>우리는 경험을 길이에 비추어 설명하곤 합니다.</p>
        <p>당신의 길이는 어떤가요?</p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="w-[120px] h-[75px] relative">
          <Image fill src="/GilaLogo.png" alt="길라 로고 이미지" style={{ objectFit: 'cover' }} />
        </div>
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
        <div className="flex flex-col items-center h-full gap-3 p-4 bg-white rounded-lg w-72">
          <p className="text-xl">
            직접 <span className="text-2xl font-semibold text-primary">길라</span>가 되어보세요!
          </p>
          <p className="text-sm text-gray_600">내가 가이드가 되어서 매듭을 묶어보세요.</p>
          <div className="w-full rounded-md h-44 bg-gray_500">이미지</div>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center h-full gap-3 p-4 bg-white rounded-lg w-72">
          <p className="text-xl">
            직접 <span className="text-2xl font-semibold text-primary">길라</span>에게 물어보세요!
          </p>
          <p className="text-sm text-center text-gray_600">
            궁금한 것들은 언제든지, 무엇이든지
            <br />
            길라들에게 물어보세요.
          </p>
          <div className="w-full rounded-md h-44 bg-gray_500">이미지</div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 pb-20">
        <p className="text-3xl font-semibold">가능성은 무한합니다!</p>
        <p className="text-3xl font-semibold">
          <span className="text-3xl font-semibold text-primary">GILA</span>와 함께해요!
        </p>
      </div>
    </main>
  );
}
