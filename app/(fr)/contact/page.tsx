import type { Metadata } from "next";
import { ArrowIcon } from "@/components/ArrowIcon";
import { ArrowLink } from "@/components/Cta";
import { ContactForm } from "@/components/ContactForm";
import { SectionLabel } from "@/components/SectionLabel";
import { languageAlternates } from "@/data/seo";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contacter Jean Marc Mahonté, graphiste senior et directeur créatif indépendant à Ouagadougou, pour un rapport, une identité visuelle, une campagne ou une direction artistique.",
  alternates: languageAlternates("fr", "/contact/", "/en/contact/"),
  openGraph: {
    title: "Contact — Jean Marc Mahonté",
    description:
      "Un rapport, une identité, une campagne ? Parlons du contexte, des contraintes et du calendrier.",
    url: "/contact/",
    images: ["/og/jean-marc-mahonte.jpg"],
  },
};

export default function ContactPage() {
  return (
    <>
      <header className="border-b border-line">
        <div className="shell grid gap-10 pb-14 pt-14 lg:grid-cols-12 lg:gap-10 lg:pb-16 lg:pt-20">
          <div className="lg:col-span-7">
            <SectionLabel index="Contact">Écrire</SectionLabel>
            <h1 className="display mt-7 max-w-[14ch] text-[clamp(3rem,6.4vw,5.6rem)]">
              Parlons de votre publication.
            </h1>
            <p className="text-lead mt-7 max-w-[54ch]">
              Rapport annuel, identité, campagne ou renfort d’équipe :
              décrivez le contexte, le commanditaire et l’échéance. Je réponds
              personnellement par e-mail.
            </p>
            <p className="mt-4 max-w-[54ch] text-sm leading-relaxed text-slate">
              Basé à Ouagadougou, j’interviens sur site et à distance, en
              français comme en anglais.
            </p>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <dl className="border-t border-ink/25">
              <div className="border-b border-line py-4">
                <dt className="label-mono text-slate">E-mail</dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${site.email}`}
                    className="break-words font-display text-lg font-semibold text-ink underline decoration-line underline-offset-4 transition-colors hover:text-teal-deep"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div className="border-b border-line py-4">
                <dt className="label-mono text-slate">Téléphone</dt>
                <dd className="mt-2 flex flex-col gap-1.5">
                  {site.phones.map((phone) => (
                    <a
                      key={phone.href}
                      href={`tel:${phone.href}`}
                      className="text-[0.9375rem] text-ink transition-colors hover:text-teal-deep"
                    >
                      {phone.label}
                    </a>
                  ))}
                </dd>
              </div>
              <div className="border-b border-line py-4">
                <dt className="label-mono text-slate">Localisation</dt>
                <dd className="mt-2 text-[0.9375rem] text-ink">
                  {site.location}
                </dd>
              </div>
              <div className="border-b border-line py-4">
                <dt className="label-mono text-slate">Curriculum vitæ</dt>
                <dd className="mt-2">
                  <a
                    href={site.cvPath}
                    download
                    className="inline-flex items-center gap-2 text-[0.9375rem] text-ink transition-colors hover:text-teal-deep"
                  >
                    Télécharger le CV (PDF)
                    <ArrowIcon direction="down" className="h-3 w-3" />
                  </a>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </header>

      <div className="shell grid gap-14 py-14 md:py-20 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <h2 className="sr-only">Formulaire de contact</h2>
          <ContactForm />
        </div>

        <aside className="lg:col-span-4 lg:col-start-9">
          <div className="border-t border-ink/25 pt-5">
            <p className="label-mono text-slate">Pour un appel d’offres</p>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              Joindre si possible les termes de référence, le calendrier, le
              volume de pages ou de supports, les langues et les règles de
              marque du commanditaire. Ces éléments permettent de cadrer une
              réponse sans échange supplémentaire.
            </p>
          </div>

          <div className="mt-8 border-t border-line pt-5">
            <p className="label-mono text-slate">Ce que je peux regarder</p>
            <ul className="mt-3 flex flex-col gap-2.5">
              {[
                "Rapports annuels et publications",
                "Chartes et systèmes d’identité",
                "Campagnes print, sociales et événementielles",
                "Refonte ou harmonisation de supports",
                "Direction artistique et renfort d’équipe",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-ink/80"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1 w-2.5 shrink-0 bg-teal"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 border-t border-line pt-5">
            <p className="label-mono text-slate">Transparence</p>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              Ce site est statique et ne dispose pas de base de données. Aucun
              formulaire n’est enregistré côté serveur. Le bouton « Préparer
              l’e-mail » ouvre votre logiciel de messagerie avec un message
              prérempli, que vous restez libre d’envoyer ou non.
            </p>
          </div>

          <div className="mt-8 bg-ink p-5 text-paper on-dark">
            <p className="label-mono text-paper/50">Contact direct</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 block break-words font-display text-lg font-semibold text-paper underline decoration-paper/30 underline-offset-4 transition-colors hover:text-ochre"
            >
              {site.email}
            </a>
            <div className="mt-4">
              <ArrowLink href="/projets" tone="light" className="text-xs">
                Voir les projets avant d’écrire
              </ArrowLink>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
