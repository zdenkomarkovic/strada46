import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL, PHONE } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: `Slep služba Strada 46 — brza pomoć na putu u Beogradu. Šlep, deblokada i prevoz vozila, dostupni 24/7. Pozovite ${PHONE}.`,
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: SITE_URL,
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
