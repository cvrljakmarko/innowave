import { Approach } from "@/components/approach";
import { Contact } from "@/components/contact";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Packages } from "@/components/packages";
import { Portfolio } from "@/components/portfolio";

export default function Home() {
  return (
    <div id="top">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
      >
        Preskoči na sadržaj
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Portfolio />
        <Packages />
        <Approach />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
