import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Innowave — Izrada poslovnih web stranica",
  description:
    "Innowave izrađuje poslovne web stranice za firme i obrte. Tri paketa: Start 1.200 €, Standard 1.500 €, Premium 2.500 €. Cijena i rok poznati su prije početka.",
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
