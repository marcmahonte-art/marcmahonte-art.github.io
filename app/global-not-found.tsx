import type { Metadata } from "next";
import { Cta } from "@/components/Cta";
import { SectionLabel } from "@/components/SectionLabel";
import { SiteFrame } from "@/components/SiteFrame";
import { site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Page introuvable",
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return (
    <SiteFrame lang="fr">
      <div className="shell flex min-h-[70vh] flex-col justify-center py-20">
        <SectionLabel index="404">Erreur / Error</SectionLabel>
        <h1 className="display mt-7 max-w-[16ch] text-[clamp(2.8rem,7vw,5.5rem)]">
          Cette page n’existe pas.
        </h1>
        <p className="text-lead mt-6 max-w-[50ch]">
          Le lien est peut-être ancien ou incomplet. The page may have moved —
          the portfolio is still available in French and English.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Cta href="/">Retour à l’accueil</Cta>
          <Cta href="/en/" variant="outline">
            Go to the English site
          </Cta>
        </div>
      </div>
    </SiteFrame>
  );
}
