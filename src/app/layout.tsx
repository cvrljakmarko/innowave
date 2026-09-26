import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { siteUrl } from "@/lib/content";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Izrada web stranica za obrte i male tvrtke | Innowave",
  description:
    "Izrađujemo poslovne web stranice, landing stranice i web shopove za obrte i male tvrtke. Jasni paketi, unaprijed dogovorena cijena i rok.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Izrada web stranica za obrte i male tvrtke | Innowave",
    description:
      "Izrađujemo poslovne web stranice, landing stranice i web shopove za obrte i male tvrtke. Jasni paketi, unaprijed dogovorena cijena i rok.",
    url: "/",
    locale: "hr_HR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#01152b",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="hr" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full bg-navy font-sans text-ink">{children}</body>
    </html>
  );
}
