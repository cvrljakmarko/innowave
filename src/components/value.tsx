import { Container } from "./container";

const benefits = [
  {
    title: "Jasno predstavljena ponuda",
    body: "Vaše usluge, proizvodi i prednosti organizirani su tako da posjetitelji brzo pronađu informacije koje traže.",
  },
  {
    title: "Jednostavan kontakt",
    body: "Olakšavamo posjetiteljima da vas nazovu, pošalju upit ili naprave narudžbu, bez nepotrebnih koraka.",
  },
  {
    title: "Spremno za Google",
    body: "Tehničke SEO postavke, kvalitetna struktura stranice i sadržaj prilagođen vašoj djelatnosti čine dobru osnovu za vidljivost u tražilicama.",
  },
];

export function Value() {
  return (
    <section id="ponuda" className="scroll-mt-24 border-b border-white/10 py-20 sm:py-28">
      <Container>
        <h2 className="max-w-3xl text-4xl leading-[1.05] font-normal tracking-[-0.04em] sm:text-5xl">
          Vaš posao zaslužuje više od obične web stranice.
        </h2>
        <p className="mt-5 max-w-2xl text-muted">
          Potencijalni klijenti žele brzo saznati što nudite, kako im možete
          pomoći i kako vas mogu kontaktirati. Zato izrađujemo stranice koje
          jasno predstavljaju vaše usluge, dobro izgledaju na mobitelima i
          olakšavaju sljedeći korak: poziv, upit ili kupnju.
        </p>
        <ul className="mt-14 grid gap-10 md:grid-cols-3">
          {benefits.map((item) => (
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
