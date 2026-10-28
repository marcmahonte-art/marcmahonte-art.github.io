import type { ReactNode } from "react";
import { ui, type Lang } from "@/data/i18n";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { PersonJsonLd } from "./JsonLd";
import { RevealController } from "./RevealController";

export function SiteFrame({
  lang,
  children,
}: {
  lang: Lang;
  children: ReactNode;
}) {
  return (
    <html lang={lang}>
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
          {ui[lang].skip}
        </a>
        <Header lang={lang} />
        <main id="contenu" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer lang={lang} />
        <RevealController />
        <PersonJsonLd lang={lang} />
      </body>
    </html>
  );
}
