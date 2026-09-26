import { deliverables } from "@/lib/content";
import { Container } from "./container";

export function Included() {
  return (
    <section id="ukljuceno" className="scroll-mt-24 border-b border-white/10 py-20 sm:py-28">
      <Container>
        <h2 className="max-w-3xl text-4xl leading-[1.05] font-normal tracking-[-0.04em] sm:text-5xl">
          Što dobivate izradom web stranice?
        </h2>
        <p className="mt-5 max-w-2xl text-muted">
          Ne izrađujemo samo vizualni prikaz vašeg poslovanja. Svaka web
          stranica treba biti pregledna, funkcionalna i jednostavna za
          korištenje na svim uređajima. Opseg SEO postavki i broj stranica
          ovise o paketu.
        </p>
        <ul className="mt-14 grid gap-10 md:grid-cols-2">
          {deliverables.map((item) => (
            <li key={item.title} className="border-t border-white/20 pt-6">
              <h3 className="text-2xl tracking-[-0.03em]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
