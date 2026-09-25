import Image from "next/image";
import { projects } from "@/lib/content";
import { Container } from "./container";

export function Portfolio() {
  return (
    <section id="radovi" className="scroll-mt-24 border-b border-white/10 py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="max-w-xl text-4xl leading-[1.05] font-normal tracking-[-0.04em] sm:text-5xl">
            Odabrani radovi
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Naslovnica i kratak opis. Link otvara stranicu uživo.
          </p>
        </div>
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
                  alt={`Naslovnica stranice ${project.title}`}
                  width={1600}
                  height={1000}
                  className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </a>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl tracking-[-0.02em]">{project.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                    {project.description}
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
      </Container>
    </section>
  );
}
