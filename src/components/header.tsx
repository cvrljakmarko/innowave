import { company, nav } from "@/lib/content";
import { Container } from "./container";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy/90 backdrop-blur-md">
      <Container className="flex items-center justify-between gap-6 py-4">
        <a
          href="#top"
          className="text-sm tracking-[0.22em] text-white uppercase focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          {company.name}
        </a>
        <nav aria-label="Glavna" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs tracking-[0.16em] text-white/80 uppercase transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#kontakt"
          className="shrink-0 rounded-md border border-white/15 px-4 py-2.5 text-xs tracking-[0.14em] text-accent uppercase transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          Zatražite ponudu
        </a>
      </Container>
      <Container className="flex gap-5 overflow-x-auto pb-3 md:hidden">
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="shrink-0 text-xs tracking-[0.14em] text-white/70 uppercase"
          >
            {item.label}
          </a>
        ))}
      </Container>
    </header>
  );
}
