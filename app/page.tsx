import About from "@/components/About";
import Hero from "@/components/Hero";
import Midsection from "@/components/Midsection";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <About />
        <Midsection />
      </main>
    </div>
  );
}
