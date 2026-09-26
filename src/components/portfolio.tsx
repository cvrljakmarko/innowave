import Image from "next/image";
import { projects } from "@/lib/content";
import { Container } from "./container";

export function Portfolio() {
  return (
    <section id="radovi" className="scroll-mt-24 border-b border-white/10 py-20 sm:py-28">
      <Container>
        <h2 className="max-w-3xl text-4xl leading-[1.05] font-normal tracking-[-0.04em] sm:text-5xl">
          Projekti koje smo realizirali
        </h2>
        <p className="mt-5 max-w-2xl text-muted">
          Svaki projekt ima svoje ciljeve i publiku. Pogledajte kako smo
          različitim poslovanjima pomogli predstaviti njihovu ponudu,
          organizirati sadržaj i olakšati komunikaciju s korisnicima.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.href} className="group">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-xl border border-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <Image
                  src={project.image}
                  alt={`Naslovnica projekta ${project.title}, ${project.category}`}
                  width={1600}
                  height={1000}
                  className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </a>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl tracking-[-0.02em]">{project.title}</h3>
                  <p className="mt-2 text-xs tracking-[0.14em] text-accent uppercase">
                    {project.category}
                  </p>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white">
                    {project.need}
                  </p>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                    {project.delivered}
                  </p>
                </div>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 pt-1 text-xs tracking-[0.14em] text-accent uppercase"
                >
                  Otvori →
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-16 border-t border-white/10 pt-10">
          <p className="max-w-xl text-lg leading-relaxed">
            Imate sličan projekt? Razgovarajmo o vašoj web stranici.
          </p>
          <a
            href="#kontakt"
            className="mt-6 inline-flex rounded-md bg-accent px-5 py-3 text-xs tracking-[0.14em] text-white uppercase transition-colors hover:bg-accent-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Zatražite ponudu
          </a>
        </div>
      </Container>
    </section>
  );
}
