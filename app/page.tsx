import Navigation from '@/src/components/Navigation';
import HeroSection from '@/src/components/HeroSection';
import Footer from '@/src/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-grow">
        <HeroSection />
      </main>
      <Footer />
    </>
  );
}
