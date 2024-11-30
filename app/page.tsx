import HeroSection from "./sections/hero";
import HomePage from "./components/testpage";

export default function Home() {
  return (
    <>
      <main className="space-y-12 sm:space-y-24">
        <HeroSection />
        <HomePage />
      </main>
    </>
  );
}