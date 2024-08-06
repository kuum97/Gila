import Image from 'next/image';

export default function LandingHeroSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-3 pt-20 pb-3 bg-white_light">
      <h1 className="text-4xl font-bold text-center">
        당신의 <span className="text-primary">길라잡이</span>가
        <br /> 되어드릴께요!
      </h1>
      <div className="w-[220px] h-[100px] relative">
        <Image fill src="/GilaName.png" alt="text-main-logo" style={{ objectFit: 'cover' }} />
      </div>
    </section>
  );
}
