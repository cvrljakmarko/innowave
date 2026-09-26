import { Container } from "./container";

export function Hero() {
  return (
    <section className="border-b border-white/10">
      <Container className="py-20 sm:py-28 lg:py-36">
        <p className="text-xs tracking-[0.2em] text-muted uppercase">
          Izrada web stranica
        </p>
        <h1 className="mt-6 max-w-5xl text-5xl leading-[0.95] font-normal tracking-[-0.045em] text-white sm:text-7xl lg:text-8xl">
          Imate posao.
          <br />
          Mi ga stavljamo na web.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
          Izrađujemo poslovne web stranice, landing stranice i web shopove za
          obrte i male tvrtke. Dobivate jasan sadržaj, prilagođen dizajn i sve
          što vam treba za profesionalan nastup na internetu, uz unaprijed
          dogovorenu cijenu i rok.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#kontakt"
            className="rounded-md bg-accent px-5 py-3 text-xs tracking-[0.14em] text-white uppercase transition-colors hover:bg-accent-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Zatražite ponudu
          </a>
          <a
            href="#cijene"
            className="rounded-md border border-white/15 px-5 py-3 text-xs tracking-[0.14em] text-accent uppercase transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Pogledajte pakete i cijene
          </a>
        </div>
        <p className="mt-8 text-sm tracking-wide text-white">
          Fiksna cijena. Dogovoren rok. Bez neugodnih iznenađenja.
        </p>
      </Container>
    </section>
  );
}
