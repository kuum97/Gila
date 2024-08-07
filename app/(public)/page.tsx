import Image from 'next/image';
import GilaName from '@/public/GilaName.png';
import Background from '@/public/LandingBackground.jpg';
import GilaLogo from '@/public/GilaLogo.png';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <LandingNavigation />
      <LandingHeroSection />
      <LandingMainSection />
    </div>
  );
}
