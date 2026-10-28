import type { Metadata } from "next";
import { AppLink as Link } from "@/components/AppLink";
import { ArrowIcon } from "@/components/ArrowIcon";
import { ArrowLink, Cta } from "@/components/Cta";
import { SectionLabel } from "@/components/SectionLabel";
import { projectHref } from "@/data/i18n";
import { getProjectEn } from "@/data/projects.en";
import { languageAlternates } from "@/data/seo";
import { reveal } from "@/lib/reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Institutional publishing, annual reports, visual identity, campaigns, infographics, digital communication and art direction for NGOs, funders and institutions.",
  alternates: languageAlternates("en", "/services/", "/en/services/"),
  openGraph: {
    locale: "en_GB",
    title: "Services — Jean Marc Mahonté",
    description:
      "Editorial design, visual identity, campaigns and art direction for development organisations.",
    url: "/en/services/",
  },
};

const services = [
  {
    id: "edition",
    title: "Editorial & reports",
    description:
      "Annual reports, activity reports, magazines, newsletters, methodological guides and brochures. Layout establishes a stable hierarchy for dense content, tables, maps and boxes.",
    deliverables: [
      "Annual or activity report",
      "Magazine or newsletter",
      "Guide and manual",
      "Project brochure",
      "Page flow and templates",
    ],
    when: "Content exists, but the reading gets lost. A clear editorial object is needed for funders, teams and partners.",
    related: [
      "fonds-mwinda",
      "cilss-praps",
      "cnps-newsletter",
      "greenmax-capital",
      "laborex-voeux-2026",
    ],
  },
  {
    id: "institutionnel",
    title: "Institutional communication",
    description:
      "Visibility materials, presentation brochures, results summaries, presentations and multi-partner documents. Funder visibility rules and logo hierarchy are treated as design constraints, not add-ons.",
    deliverables: [
      "Institutional brochure",
      "Funder visibility materials",
      "Project or results summary",
      "Institutional presentation",
      "Print and digital adaptations",
    ],
    when: "Several organisations co-sign a programme and every material must remain legible, compliant and consistent.",
    related: [
      "christian-aid-femmes-energie",
      "cilss-praps",
      "coris-bank-tchad",
      "canal-plus-tchad",
      "oeacp-carte-voeux",
      "youth-connekt-madagascar",
      "greenmax-capital",
    ],
  },
  {
    id: "infographies",
    title: "Infographics & data visualisation",
    description:
      "Maps, diagrams, timelines, data boxes and data pages integrated into your publications. The aim is not to decorate a figure, but to situate it and make it understandable without betraying the source.",
    deliverables: [
      "Intervention maps",
      "Programme diagrams",
      "Data pages",
      "Figure boxes",
      "Social infographics",
    ],
    when: "Data exists but remains invisible in the body text or is hard to read for a non-specialist audience.",
    related: ["plan-international-tchad", "cilss-praps", "greenmax-capital"],
  },
  {
    id: "campagnes",
    title: "Campaigns & awareness",
    description:
      "Awareness campaigns, posters, social visuals, banners, merchandise and event installations. One message, rigorously adapted from outdoor format to social carousel.",
    deliverables: [
      "Campaign posters and visuals",
      "Banners and signage",
      "Social media visuals",
      "Merchandise and textiles",
      "Event installations",
    ],
    when: "A cause needs to leave the report and reach the field, an event or social media.",
    related: [
      "christian-aid-femmes-energie",
      "plan-international-tchad",
      "wateraid-tour-du-faso",
      "association-warassa",
      "coris-bank-tchad",
      "youth-connekt-madagascar",
      "azalai-hotel",
    ],
  },
  {
    id: "identite",
    title: "Visual identity & branding",
    description:
      "Logo, brand guidelines, palette, typography, stationery, templates and signage. An identity is only useful if teams can make it their own: I deliver rules and templates, not just a symbol.",
    deliverables: [
      "Logotype and brand system",
      "Brand guidelines",
      "Stationery and signature",
      "Word, PowerPoint and social media templates",
      "Signage and merchandise",
    ],
    when: "An organisation, fund or project needs a consistent image across every touchpoint.",
    related: [
      "fonds-mwinda",
      "projet-idea",
      "association-warassa",
      "coris-bank-tchad",
      "laborex-voeux-2026",
      "youth-connekt-madagascar",
    ],
  },
  {
    id: "digital",
    title: "Digital & social media",
    description:
      "Social visuals, post templates, banners and digital adaptations of your campaigns or publications. Formats are designed to stay legible on a phone screen without losing print quality.",
    deliverables: [
      "Post templates",
      "Carousels and stories",
      "Web banners",
      "Campaign adaptations",
      "Publishing kit for teams",
    ],
    when: "Print materials exist but teams need a simple system for regular publishing.",
    related: [
      "fonds-mwinda",
      "cnps-newsletter",
      "wateraid-tour-du-faso",
      "plan-international-tchad",
      "coris-bank-tchad",
      "azalai-hotel",
      "youth-connekt-madagascar",
    ],
  },
  {
    id: "direction",
    title: "Art direction & support",
    description:
      "Creative framing, photographic direction, production follow-up and editorial consistency across several materials. I work as support for a team or agency, on a one-off assignment or a multi-year programme.",
    deliverables: [
      "Intent note and framing",
      "Photographic direction",
      "Production follow-up and proofs",
      "Redesign or harmonisation of materials",
      "Agency or team support",
    ],
    when: "Several materials or suppliers need to converge on the same visual quality.",
    related: [
      "fonds-mwinda",
      "plan-international-tchad",
      "projet-idea",
      "coris-bank-tchad",
      "youth-connekt-madagascar",
      "greenmax-capital",
      "oeacp-carte-voeux",
    ],
  },
];

export default function EnglishServicesPage() {
  return (
    <>
      <header className="border-b border-line">
        <div className="shell grid gap-10 pb-14 pt-14 lg:grid-cols-12 lg:pb-20 lg:pt-20">
          <div className="lg:col-span-8">
            <SectionLabel index="07 services">Expertise</SectionLabel>
            <h1 className="display mt-7 max-w-[14ch] text-[clamp(3rem,6.8vw,6rem)]">
              Designing materials that hold.
            </h1>
            <p className="text-lead mt-7 max-w-[58ch]">
              From the annual report to the field campaign, every assignment
              starts from the content, the audience and production constraints.
              One-off assignments, multi-year programmes or agency support.
            </p>
          </div>
          <aside className="self-end lg:col-span-3 lg:col-start-10">
            <p className="border-t border-ink/25 pt-4 text-sm leading-relaxed text-slate">
              The services listed here are grounded in real projects presented
              in the portfolio. No generic offer has been added to complete the
              list.
            </p>
          </aside>
        </div>
      </header>

      <div className="shell">
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className="scroll-mt-28 border-b border-line py-14 md:py-16"
            {...reveal()}
          >
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-4">
                <div className="flex items-baseline gap-4">
                  <span className="label-mono text-ink/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-[clamp(1.6rem,2.6vw,2.15rem)] font-semibold leading-tight tracking-[-0.02em] text-ink">
                    {service.title}
                  </h2>
                </div>
                <p className="mt-5 max-w-[36ch] text-sm leading-relaxed text-slate">
                  {service.description}
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
                <div>
                  <p className="label-mono border-b border-line pb-2.5 text-slate">
                    Typical deliverables
                  </p>
                  <ul className="mt-3 flex flex-col gap-2">
                    {service.deliverables.map((item) => (
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

                <div className="flex flex-col">
                  <div>
                    <p className="label-mono border-b border-line pb-2.5 text-slate">
                      When to call on me
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ink/80">
                      {service.when}
                    </p>
                  </div>
                  <div className="mt-6">
                    <p className="label-mono border-b border-line pb-2.5 text-slate">
                      Related projects
                    </p>
                    <ul className="mt-3 flex flex-col gap-2">
                      {service.related.map((slug) => {
                        const project = getProjectEn(slug);
                        if (!project) return null;
                        return (
                          <li key={slug}>
                            <Link
                              href={projectHref("en", slug)}
                              className="group inline-flex items-center gap-2 text-sm text-ink transition-colors hover:text-teal-deep"
                            >
                              <span className="link-line">{project.title}</span>
                              <ArrowIcon className="h-2.5 w-2.5 shrink-0 opacity-40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="shell grid gap-8 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-7">
          <SectionLabel index="Next">Next step</SectionLabel>
          <h2 className="display mt-5 max-w-[22ch] text-[clamp(2rem,3.8vw,3.2rem)]">
            A precise need, a brief still unclear?
          </h2>
          <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-slate">
            Describe the context, the commissioning organisation and the
            deadline. It is often possible to clarify the scope before talking
            about aesthetics.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 md:col-span-4 md:col-start-9 md:justify-end">
          <Cta href="/en/contact">Get in touch</Cta>
          <ArrowLink href="/en/method">See the method</ArrowLink>
        </div>
      </section>
    </>
  );
}
