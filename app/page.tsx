import Section2 from "./sections/section2";
import HomePage from "./components/testpage";
import Card from "./components/card";
export default function Home() {
  return (
    <>
      <main className="space-y-12 sm:space-y-24">
        <Card />
        <HomePage />
      </main>
    </>
  );
}