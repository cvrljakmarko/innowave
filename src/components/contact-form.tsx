"use client";

import { useActionState, useEffect, useState } from "react";
import { sendInquiry, type InquiryState } from "@/app/actions/contact";
import { inquiryKinds } from "@/lib/content";

const field =
  "border border-white/15 bg-transparent px-3 py-3 text-base text-white outline-none transition-colors placeholder:text-white/30 focus:border-accent";

const initialState: InquiryState = { status: "idle", message: "" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendInquiry, initialState);
  const [popup, setPopup] = useState(false);
  const sent = state.status === "success";

  useEffect(() => {
    if (!sent) return;
    setPopup(true);
    const timer = window.setTimeout(() => setPopup(false), 3000);
    return () => window.clearTimeout(timer);
  }, [sent]);

  return (
    <form action={formAction} className="relative rounded-xl border border-white/10 bg-navy-2 p-6 sm:p-8">
      <div className="absolute -left-[9999px] h-0 overflow-hidden" aria-hidden="true">
        <label>
          Ne ispunjavajte
          <input name="company_fax" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm">
          Ime
          <input required name="name" autoComplete="name" className={field} />
        </label>
        <label className="grid gap-2 text-sm">
          E-mail
          <input required type="email" name="email" autoComplete="email" className={field} />
        </label>
        <label className="grid gap-2 text-sm">
          Vrsta web stranice
          <select
            required
            name="kind"
            defaultValue=""
            className={field}
            style={{ colorScheme: "dark" }}
          >
            <option value="" disabled>
              Odaberite
            </option>
            {inquiryKinds.map((kind) => (
              <option key={kind} value={kind}>
                {kind}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm">
          Naziv tvrtke ili obrta
          <input name="business" autoComplete="organization" className={field} />
        </label>
        <label className="grid gap-2 text-sm">
          Web stranica, ako već postoji
          <input name="website" type="url" inputMode="url" placeholder="https://" className={field} />
        </label>
        <label className="grid gap-2 text-sm">
          Kratak opis projekta
          <textarea name="message" rows={4} className={`${field} resize-y`} />
        </label>
      </div>
      <button
        type="submit"
        disabled={pending || sent}
        className="mt-6 rounded-md bg-accent px-5 py-3 text-xs tracking-[0.14em] text-white uppercase transition-colors hover:bg-accent-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent disabled:cursor-default disabled:opacity-60"
      >
        {pending ? "Šaljem…" : "Zatražite ponudu"}
      </button>
      <p className="mt-4 text-sm leading-relaxed text-muted" aria-live="polite">
        {sent
          ? "Poruka je poslana."
          : state.status === "error"
            ? state.message
            : "Upit se šalje e-poštom nama. Na ovoj stranici podatke ne spremamo."}
      </p>
      {popup ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-[#01152b]/75 px-6">
          <div
            role="status"
            className="w-full max-w-md rounded-xl border border-white/10 bg-navy-2 px-8 py-8 text-center"
          >
            <p className="text-2xl tracking-[-0.03em] text-white">Poruka je poslana.</p>
            <p className="mt-3 text-muted">Odgovorit ćemo u najkraćem mogućem roku.</p>
          </div>
        </div>
      ) : null}
    </form>
  );
}
