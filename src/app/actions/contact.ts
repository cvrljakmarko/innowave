"use server";

import { inquiryKinds } from "@/lib/content";

export type InquiryState = {
  status: "idle" | "success" | "error";
  message: string;
};

const sent =
  "Upit je poslan. Odgovor stiže na e-mail koji ste upisali.";
const failed =
  "Upit se nije poslao. Možete nam pisati izravno na adresu iznad.";

function field(formData: FormData, name: string, max: number) {
  return String(formData.get(name) ?? "")
    .replace(/[\u0000\r\n]/g, " ")
    .trim()
    .slice(0, max);
}

function text(formData: FormData, name: string, max: number) {
  return String(formData.get(name) ?? "")
    .replace(/\u0000/g, "")
    .trim()
    .slice(0, max);
}

export async function sendInquiry(
  _prev: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  if (field(formData, "company_fax", 200)) {
    return { status: "success", message: sent };
  }

  const name = field(formData, "name", 80);
  const email = field(formData, "email", 120);
  const kind = field(formData, "kind", 80);
  const business = field(formData, "business", 120);
  const website = field(formData, "website", 200);
  const message = text(formData, "message", 2000);

  if (!name || !email || !kind) {
    return { status: "error", message: "Ispunite ime, e-mail i vrstu stranice." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "E-mail adresa nije ispravna." };
  }

  if (!inquiryKinds.includes(kind as (typeof inquiryKinds)[number])) {
    return { status: "error", message: "Odaberite vrstu web stranice." };
  }

  if (website && !/^https?:\/\/\S+$/i.test(website)) {
    return { status: "error", message: "Web adresa treba početi s https://." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY nije postavljen.");
    return { status: "error", message: failed };
  }

  const lines = [
    `Vrsta web stranice: ${kind}`,
    business ? `Naziv: ${business}` : "",
    website ? `Postojeća stranica: ${website}` : "",
    message ? `\n${message}` : "",
    `\n— ${name}`,
    email,
  ].filter(Boolean);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM ?? "Innowave <hello@innowave.media>",
      to: [process.env.CONTACT_TO ?? "marko.cvrljak1@gmail.com"],
      reply_to: email,
      subject: `Upit za web od ${name}`,
      text: lines.join("\n"),
    }),
  });

  if (!response.ok) {
    console.error("Slanje upita nije uspjelo.", response.status);
    return { status: "error", message: failed };
  }

  return { status: "success", message: sent };
}
