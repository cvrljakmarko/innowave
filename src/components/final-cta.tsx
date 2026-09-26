import { Container } from "./container";

export function FinalCta() {
  return (
    <section className="border-b border-white/10 py-20 sm:py-28">
      <Container>
        <h2 className="max-w-3xl text-4xl leading-[1.05] font-normal tracking-[-0.04em] sm:text-5xl">
          Vrijeme je da vaš posao dobije svoju web stranicu.
        </h2>
        <p className="mt-5 max-w-xl text-muted">
          Jasna ponuda, dogovorena cijena i definiran rok. Javite nam što vam
          treba i krenimo od konkretnog plana.
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
            Pogledajte cijene
          </a>
        </div>
      </Container>
    </section>
  );
}
