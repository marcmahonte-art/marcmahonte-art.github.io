import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PersonJsonLd } from "@/components/JsonLd";
import { RevealController } from "@/components/RevealController";
import { site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.roleShort}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: `${site.name} — Portfolio`,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "graphiste senior",
    "directeur créatif",
    "design graphique institutionnel",
    "rapport annuel",
    "édition",
    "communication visuelle",
    "ONG",
    "bailleurs",
    "Ouagadougou",
    "Burkina Faso",
    "Afrique de l’Ouest",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: `${site.name} — Portfolio`,
    title: `${site.name} — ${site.roleShort}`,
    description: site.description,
    images: [
      {
        url: "/og/jean-marc-mahonte.jpg",
        width: 1200,
        height: 630,
        alt: `Portfolio de ${site.name}, graphiste senior et directeur créatif à Ouagadougou.`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.roleShort}`,
    description: site.description,
    images: ["/og/jean-marc-mahonte.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#122333",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="preload"
          href="/fonts/archivo-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/inter-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body>
        <a href="#contenu" className="skip-link">
          Aller au contenu
        </a>
        <Header />
        <main id="contenu" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <RevealController />
        <PersonJsonLd />
      </body>
    </html>
  );
}
