import { steps } from "@/lib/content";
import { Container } from "./container";

export function Approach() {
  return (
    <section id="proces" className="scroll-mt-24 border-b border-white/10 py-20 sm:py-28">
      <Container>
        <h2 className="max-w-3xl text-4xl leading-[1.05] font-normal tracking-[-0.04em] sm:text-5xl">
          Od prvog razgovora do objave web stranice.
        </h2>
        <p className="mt-5 max-w-2xl text-muted">
          Proces je jednostavan i unaprijed dogovoren. Znate što trebamo od
          vas, što mi radimo i kada možete očekivati gotovu stranicu. Točan
          rok piše na paketu i u ponudi.
        </p>
        <ol className="mt-14 grid gap-10 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.index} className="border-t border-white/20 pt-6">
              <span className="text-sm tracking-[0.16em] text-accent">{step.index}</span>
              <h3 className="mt-4 text-2xl tracking-[-0.03em]">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
