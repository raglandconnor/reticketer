import Image from 'next/image';
import HeroSection from './components/HeroSection';

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center py-32">
        <main className="md:w-[720px] lg:w-[860px] xl:w-[920px] 2xl:w-[1200px]">
          <HeroSection />
        </main>
      </div>
    </>
  );
}
