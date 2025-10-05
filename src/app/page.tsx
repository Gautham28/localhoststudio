import Image from "next/image";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { SmoothCursor } from "@/components/ui/smooth-cursor"

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <FAQ />
      <Footer />
      <SmoothCursor />
    </main>

  );
}
