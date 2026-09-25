"use client";

import { useState, type FormEvent } from "react";
import { company } from "@/lib/content";

const field =
  "border border-white/15 bg-transparent px-3 py-3 text-base text-white outline-none transition-colors placeholder:text-white/30 focus:border-accent";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Upit za web od ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      action={`mailto:${company.email}`}
      method="post"
      encType="text/plain"
      className="rounded-xl border border-white/10 bg-navy-2 p-6 sm:p-8"
    >
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm">
          Ime
          <input required name="name" autoComplete="name" className={field} />
        </label>
        <label className="grid gap-2 text-sm">
          E-pošta
          <input required type="email" name="email" autoComplete="email" className={field} />
        </label>
        <label className="grid gap-2 text-sm">
          Kakva vam stranica treba?
          <textarea required name="message" rows={5} className={`${field} resize-y`} />
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 rounded-md bg-accent px-5 py-3 text-xs tracking-[0.14em] text-white uppercase transition-colors hover:bg-accent-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        Pošalji upit
      </button>
      <p className="mt-4 text-sm leading-relaxed text-muted" aria-live="polite">
        {sent
          ? "Program za e-poštu trebao bi se otvoriti s ovom porukom. Ako se ne otvori, pišite nam izravno."
          : "Otvara se vaš program za e-poštu. Na ovoj stranici ništa ne spremamo."}
      </p>
    </form>
  );
}
