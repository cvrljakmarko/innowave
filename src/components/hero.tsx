import { company } from "@/lib/content";
import { Container } from "./container";

export function Hero() {
  return (
    <section className="border-b border-white/10">
      <Container className="py-20 sm:py-28 lg:py-36">
        <p className="text-xs tracking-[0.2em] text-muted uppercase">
          {company.practice}
        </p>
        <h1 className="mt-6 max-w-5xl text-5xl leading-[0.95] font-normal tracking-[-0.045em] text-white sm:text-7xl lg:text-8xl">
          Imate posao.
          <br />
          Mi ga stavljamo na web.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
          Poslovne stranice za firme i obrte u Hrvatskoj. Cijena je poznata
          prije početka. Rok stoji u ponudi i ne mijenja se usred rada.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#radovi"
            className="rounded-md border border-white/15 px-5 py-3 text-xs tracking-[0.14em] text-accent uppercase transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Pogledaj radove →
          </a>
          <a
            href="#cijene"
            className="rounded-md bg-accent px-5 py-3 text-xs tracking-[0.14em] text-white uppercase transition-colors hover:bg-accent-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Vidi cijene
          </a>
        </div>
      </Container>
    </section>
  );
}
