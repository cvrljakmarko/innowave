import { ContactForm } from "./contact-form";
import { Container } from "./container";

export function Contact() {
  return (
    <section id="kontakt" className="scroll-mt-24 py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 className="text-4xl leading-[1.05] font-normal tracking-[-0.04em] sm:text-5xl">
            Recite nam što vam treba.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Pošaljite nam nekoliko informacija o svom poslovanju. Predložit
            ćemo odgovarajući paket i poslati vam ponudu s jasnim opsegom,
            cijenom i rokom.
          </p>
        </div>
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
