import { faqs } from "@/lib/content";
import { Container } from "./container";

export function Faq() {
  return (
    <section id="pitanja" className="scroll-mt-24 border-b border-white/10 py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-12">
        <h2 className="text-4xl leading-[1.05] font-normal tracking-[-0.04em] sm:text-5xl lg:col-span-4">
          Česta pitanja o izradi web stranica
        </h2>
        <div className="border-t border-white/10 lg:col-span-8">
          {faqs.map((item) => (
            <details key={item.q} className="border-b border-white/10 [&[open]_span]:rotate-45">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                {item.q}
                <span aria-hidden="true" className="text-2xl text-accent transition-transform">
                  +
                </span>
              </summary>
              <p className="max-w-2xl pb-6 leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
