import { extras, packages } from "@/lib/content";
import { Container } from "./container";

export function Packages() {
  return (
    <section id="cijene" className="scroll-mt-24 border-b border-white/10 py-20 sm:py-28">
      <Container>
        <h2 className="max-w-3xl text-4xl leading-[1.05] font-normal tracking-[-0.04em] sm:text-5xl">
          Tri paketa. Cijena prije početka.
        </h2>
        <p className="mt-5 max-w-2xl text-muted">
          Gotovo svaka poslovna stranica stane u jedan od ova tri okvira. Ako
          treba više, to stoji u ponudi i ne mijenja se usred izrade.
        </p>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {packages.map((item) => (
            <article
              key={item.name}
              className={`flex flex-col rounded-xl border p-7 sm:p-8 ${
                item.featured
                  ? "order-first border-accent bg-navy-2 lg:order-none"
                  : "border-white/10 bg-navy-2/60"
              }`}
            >
              <p className="text-xs tracking-[0.16em] text-accent uppercase">
                {item.label}
              </p>
              <h3 className="mt-5 text-2xl tracking-[-0.03em]">{item.name}</h3>
              <p className="mt-4 text-5xl tracking-[-0.04em]">{item.price}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{item.audience}</p>
              <ul className="mt-8 space-y-3 border-t border-white/10 pt-6 text-sm leading-relaxed">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className="mt-6 text-xs tracking-[0.14em] text-muted uppercase">
                {item.time}
              </p>
              <a
                href="#kontakt"
                className={`mt-8 inline-flex rounded-md px-4 py-3 text-xs tracking-[0.14em] uppercase ${
                  item.featured
                    ? "bg-accent text-white hover:bg-accent-deep"
                    : "border border-white/15 text-accent hover:border-accent"
                }`}
              >
                Zatraži ovaj paket
              </a>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl tracking-[-0.03em]">Dodatne usluge</h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            Vrijede uz izradu i kasnije, kad stranica već radi. Stavke bez
            fiksnog iznosa dobiju ponudu nakon razgovora.
          </p>
          <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
            {extras.map((item) => (
              <li
                key={item.name}
                className="flex items-baseline justify-between gap-6 py-4"
              >
                <span>{item.name}</span>
                <span className="shrink-0 text-muted">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
