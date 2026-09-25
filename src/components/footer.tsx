import { company, nav } from "@/lib/content";
import { Container } from "./container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm tracking-[0.22em] uppercase">{company.name}</p>
          <p className="mt-2 text-sm text-muted">{company.practice}</p>
        </div>
        <nav aria-label="Podnožje" className="flex flex-wrap gap-x-6 gap-y-2">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
      <Container>
        <p className="mt-10 text-xs tracking-[0.14em] text-muted uppercase">
          © {new Date().getFullYear()} {company.name}
        </p>
      </Container>
    </footer>
  );
}
