import type { Metadata } from "next";
import { Cta } from "@/components/Cta";
import { SectionLabel } from "@/components/SectionLabel";
import { languageAlternates } from "@/data/seo";
import { reveal } from "@/lib/reveal";

export const metadata: Metadata = {
  title: "Méthode",
  description:
    "Une méthode de travail en sept étapes : brief, cadrage, conception, production, validation, livraison des fichiers sources et archivage.",
  alternates: languageAlternates("fr", "/methodologie/", "/en/method/"),
  openGraph: {
    title: "Méthode — Jean Marc Mahonté",
    description:
      "Brief, cadrage, conception, production, validation, livraison et archivage : un processus lisible pour les équipes et les bailleurs.",
    url: "/methodologie/",
  },
};

const steps = [
  {
    title: "Brief",
    description:
      "Comprendre la demande réelle, le public, le commanditaire, l’échéance et le circuit de validation. Le brief peut être un document existant ou un échange à structurer.",
    input: "Note de cadrage, termes de référence ou échange initial",
    output: "Reformulation des enjeux et des contraintes",
  },
  {
    title: "Cadrage",
    description:
      "Définir le périmètre : formats, volumes, langues, déclinaisons, sources photographiques, règles de marque et obligations bailleurs. C’est l’étape où l’on évite les mauvaises surprises de production.",
    input: "Charte, logos, textes, images, obligations de visibilité",
    output: "Périmètre de production et planning de travail",
  },
  {
    title: "Conception",
    description:
      "Construire la direction éditoriale et graphique : grille, hiérarchie typographique, palette, traitement des images et principes de données. Une proposition argumentée, pas une accumulation d’effets.",
    input: "Contenus stabilisés ou version de travail",
    output: "Direction artistique et maquette de référence",
  },
  {
    title: "Production",
    description:
      "Mettre en page l’ensemble des contenus, produire les cartes, schémas et déclinaisons, préparer les fichiers pour l’impression et le numérique. Chaque support est contrôlé dans son format final.",
    input: "Contenus validés au fil de l’eau",
    output: "Fichiers de production et bons à tirer",
  },
  {
    title: "Validation",
    description:
      "Organiser les allers-retours avec les parties prenantes : direction, programme, communication, bailleur. Les versions sont tracées et les décisions documentées.",
    input: "Commentaires consolidés de l’équipe",
    output: "Version finale approuvée",
  },
  {
    title: "Livraison des fichiers sources",
    description:
      "Livrer les fichiers de travail organisés — InDesign, Illustrator, Photoshop, Figma selon le projet — avec les liens, les polices utilisées et les exports finaux. Les équipes peuvent reprendre le document.",
    input: "Validation finale",
    output: "Sources organisées, exports print et numériques",
  },
  {
    title: "Archivage",
    description:
      "Conserver une copie structurée du projet : sources, exports, images et notes de fabrication. Une base saine pour les mises à jour, les éditions suivantes et les équipes qui prennent le relais.",
    input: "Projet clôturé",
    output: "Archive de référence et documentation de production",
  },
];

const collaborations = [
  {
    title: "Mission complète",
    text: "Du brief à la livraison des fichiers sources, pour un rapport, une identité ou une campagne.",
  },
  {
    title: "Accompagnement",
    text: "Direction artistique et conseil sur plusieurs supports, en soutien à une équipe de communication.",
  },
  {
    title: "Renfort d’agence",
    text: "Intégration à une équipe existante sur une production ou un pic d’activité, avec respect du cadre du client final.",
  },
];

export default function MethodologyPage() {
  return (
    <>
      <header className="border-b border-line">
        <div className="shell grid gap-10 pb-14 pt-14 lg:grid-cols-12 lg:pb-20 lg:pt-20">
          <div className="lg:col-span-8">
            <SectionLabel index="07 étapes">Méthode</SectionLabel>
            <h1 className="display mt-7 max-w-[15ch] text-[clamp(3rem,6.6vw,5.8rem)]">
              Une méthode simple, tenue jusqu’au bout.
            </h1>
            <p className="text-lead mt-7 max-w-[58ch]">
              Le design n’intervient pas à la fin, une fois le texte prêt. Il
              commence dès que le contenu est structuré, avec une question :
              qu’est-ce que le lecteur doit comprendre, et dans quel ordre ?
            </p>
          </div>
          <aside className="self-end lg:col-span-3 lg:col-start-10">
            <p className="border-t border-ink/25 pt-4 text-sm leading-relaxed text-slate">
              Cette méthode est celle appliquée aux projets présentés. Elle
              s’adapte au format de la mission, pas l’inverse.
            </p>
          </aside>
        </div>
      </header>

      <div className="shell">
        {steps.map((step, index) => (
          <section
            key={step.title}
            className="scroll-mt-28 border-b border-line py-12 md:py-14"
            {...reveal()}
          >
            <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-1">
                <span className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-semibold leading-none text-ink/15">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="lg:col-span-4">
                <h2 className="font-display text-[clamp(1.6rem,2.8vw,2.2rem)] font-semibold tracking-[-0.02em] text-ink">
                  {step.title}
                </h2>
                <p className="mt-4 max-w-[38ch] text-sm leading-relaxed text-slate">
                  {step.description}
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
                <div className="border-t border-line pt-4">
                  <p className="label-mono text-slate">Vous fournissez</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/80">
                    {step.input}
                  </p>
                </div>
                <div className="border-t border-line pt-4">
                  <p className="label-mono text-teal-deep">Je produis</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/80">
                    {step.output}
                  </p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="shell py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <SectionLabel index="Collaboration">Trois cadres</SectionLabel>
            <h2 className="display mt-6 max-w-[12ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              S’adapter au cadre existant.
            </h2>
          </div>
          <div className="grid gap-px border border-line bg-line sm:grid-cols-3 lg:col-span-8 lg:col-start-5">
            {collaborations.map((item, index) => (
              <div key={item.title} className="bg-paper p-6 sm:p-7">
                <span className="label-mono text-ink/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 font-display text-lg font-semibold leading-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-8 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="label-mono text-slate">Échanges</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/80">
              Un interlocuteur identifié, des points de validation explicites
              et une trace des décisions.
            </p>
          </div>
          <div>
            <p className="label-mono text-slate">Outils</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/80">
              Adobe InDesign, Illustrator et Photoshop, Figma. Fichiers
              organisés et exports adaptés.
            </p>
          </div>
          <div>
            <p className="label-mono text-slate">Langues</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/80">
              Travail en français et en anglais. Relecture attentive des
              terminologies institutionnelles.
            </p>
          </div>
          <div>
            <p className="label-mono text-slate">Cadre</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/80">
              Respect des chartes, des règles bailleurs et de la
              confidentialité des contenus transmis.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-ink text-paper on-dark">
        <div className="shell flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <div>
            <p className="label-mono text-paper/50">Démarrer</p>
            <h2 className="display mt-4 max-w-[24ch] text-[clamp(2rem,3.8vw,3.2rem)] text-paper">
              Le brief peut être imparfait. La méthode sert à le clarifier.
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Cta href="/contact" variant="light">
              Me contacter
            </Cta>
            <Cta href="/projets" variant="ghost-light">
              Voir les projets
            </Cta>
          </div>
        </div>
      </section>
    </>
  );
}
