import Image from "next/image";
import { people } from "@/lib/content";
import { Container } from "./container";

export function Team() {
  return (
    <section id="tim" className="scroll-mt-24 border-b border-white/10 py-20 sm:py-28">
      <Container>
        <h2 className="max-w-3xl text-4xl leading-[1.05] font-normal tracking-[-0.04em] sm:text-5xl">
          O nama.
        </h2>
        <p className="mt-5 max-w-2xl text-muted">
          Maida i Marko su web developeri s više od 10 godina iskustva u
          izradi web stranica. Radimo s obrtima, malim tvrtkama i lokalnim
          uslugama, kako bismo unaprijedili vaše poslovanje.
        </p>
        <ul className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          {people.map((person) => (
            <li key={person.href}>
              <a
                href={person.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col items-center rounded-xl border border-white/10 bg-navy-2/60 px-6 py-8 text-center transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <Image
                  src={person.image}
                  alt=""
                  width={700}
                  height={700}
                  unoptimized
                  className="size-40 rounded-full object-cover object-center ring-1 ring-white/15"
                />
                <span className="mt-5 block text-lg tracking-[-0.02em]">{person.name}</span>
                <span className="mt-1 block text-sm text-muted">{person.role}</span>
                <span className="mt-3 block text-xs tracking-[0.14em] text-accent uppercase">
                  LinkedIn →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
