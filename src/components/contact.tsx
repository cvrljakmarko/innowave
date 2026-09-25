import { company } from "@/lib/content";
import { ContactForm } from "./contact-form";
import { Container } from "./container";

export function Contact() {
  return (
    <section id="kontakt" className="scroll-mt-24 py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 className="text-4xl leading-[1.05] font-normal tracking-[-0.04em] sm:text-5xl">
            Jedan upit. Jedna ponuda.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Napišite djelatnost, treba li vam Start, Standard ili Premium, i do
            kada stranica treba biti online.
          </p>
          <a
            href={`mailto:${company.email}`}
            className="mt-8 inline-block text-2xl tracking-[-0.03em] text-white underline decoration-white/20 underline-offset-8 transition-colors hover:text-accent"
          >
            {company.email}
          </a>
        </div>
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
