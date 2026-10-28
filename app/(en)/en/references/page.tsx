import type { Metadata } from "next";
import { AppLink as Link } from "@/components/AppLink";
import { ArrowIcon } from "@/components/ArrowIcon";
import { ArrowLink, Cta } from "@/components/Cta";
import { SectionLabel } from "@/components/SectionLabel";
import { projectHref, type Lang } from "@/data/i18n";
import { getProjectEn, type ProjectEn } from "@/data/projects.en";
import { languageAlternates } from "@/data/seo";
import { reveal } from "@/lib/reveal";

export const metadata: Metadata = {
  title: "References",
  description:
    "Organisations, programmes and brands for which Jean Marc Mahonté has designed materials: CILSS, OACPS, Christian Aid, WaterAid, Plan International, Youth Connekt, CNPS, Fonds Mwinda, Coris Bank, Canal+, GreenMax, Laborex, Azalai and others.",
  alternates: languageAlternates("en", "/references/", "/en/references/"),
  openGraph: {
    locale: "en_GB",
    title: "References — Jean Marc Mahonté",
    description:
      "Institutions, NGOs, funder-financed programmes and brands: documented professional references.",
    url: "/en/references/",
  },
};

const lang: Lang = "en";

type Reference = {
  name: string;
  type: string;
  context: string;
  year: string;
  caseSlug?: string;
  note?: string;
};

const groups: { title: string; intro: string; items: Reference[] }[] = [
  {
    title: "Institutions, programmes & NGOs",
    intro:
      "Organisations for which publications, identities, campaigns or institutional materials were designed.",
    items: [
      {
        name: "CILSS",
        type: "Inter-state institution · Sahel",
        context:
          "50th anniversary magazine and newsletters for the PRAPS programme.",
        year: "2023",
        caseSlug: "cilss-praps",
      },
      {
        name: "OACPS",
        type: "Intergovernmental organisation",
        context:
          "Official Eid al-Fitr greeting card and 50th anniversary identity.",
        year: "Not specified",
        caseSlug: "oeacp-carte-voeux",
        note: "The visuals for the 11th Summit mentioned in the CV are not present in the folder.",
      },
      {
        name: "Christian Aid Burkina Faso",
        type: "NGO · EDF project, European Union",
        context:
          "“Women and sustainable energy” campaign and EU visibility materials.",
        year: "2021 — 2023",
        caseSlug: "christian-aid-femmes-energie",
      },
      {
        name: "WaterAid Burkina Faso",
        type: "NGO · Water, sanitation and hygiene",
        context:
          "Communication and event materials for the 2021 Tour du Faso.",
        year: "2021",
        caseSlug: "wateraid-tour-du-faso",
      },
      {
        name: "Plan International Chad",
        type: "NGO · Children’s rights",
        context:
          "Wall fresco, banners, merchandise and campaign visuals.",
        year: "2025 — 2026",
        caseSlug: "plan-international-tchad",
        note: "Year provided by Jean Marc Mahonté.",
      },
      {
        name: "Youth Connekt Africa",
        type: "Pan-African programme · Youth",
        context:
          "Presentation and social campaign for the 2025 summit in Madagascar.",
        year: "2025",
        caseSlug: "youth-connekt-madagascar",
        note: "Role, year and country provided by Jean Marc Mahonté.",
      },
      {
        name: "Fonds Mwinda / ANSER",
        type: "Public fund · Rural electrification, DRC",
        context:
          "Brand guidelines, annual report, newsletter and presentation templates.",
        year: "2026",
        caseSlug: "fonds-mwinda",
      },
      {
        name: "CNPS Côte d’Ivoire",
        type: "Public institution · Social protection",
        context:
          "Newsletter on transforming the client relationship and social media adaptations.",
        year: "2025",
        caseSlug: "cnps-newsletter",
      },
      {
        name: "I.D.E.A. Project / ONECI",
        type: "Multi-partner project · Child protection",
        context:
          "Notebooks, banners and visibility T-shirts for the project in Côte d’Ivoire.",
        year: "2026",
        caseSlug: "projet-idea",
      },
      {
        name: "Warassa Association",
        type: "Association · Solidarity and empowerment",
        context:
          "Launch campaign for the reception centre, Chad.",
        year: "2025",
        caseSlug: "association-warassa",
      },
      {
        name: "Court of Auditors of Burkina Faso",
        type: "Public institution",
        context:
          "Identity and materials for the open days, according to the CV.",
        year: "2023",
        note: "Source folder empty. No visual from this project is present in the folder.",
      },
      {
        name: "ABB",
        type: "Programme · EU, USAID and UNFPA partners",
        context:
          "Multi-channel communication and institutional materials, according to the CV.",
        year: "—",
        note: "Source: CV. No folder or visual for this project is present in the sources.",
      },
    ],
  },
  {
    title: "Private sector & events",
    intro:
      "Collaborations in the private sector and events, documented by production materials or cited in the CV.",
    items: [
      {
        name: "Coris Bank International Chad",
        type: "Bank",
        context:
          "Launch package: stage backdrop, easels, signage and social visuals.",
        year: "2024 — 2025",
        caseSlug: "coris-bank-tchad",
      },
      {
        name: "Canal+ Chad",
        type: "Media & television",
        context:
          "Welcome easels and brand cube for a launch in Chad.",
        year: "Not specified",
        caseSlug: "canal-plus-tchad",
        note: "The visuals are presentation simulations, not photographs of the event. Year and direct commissioning organisation are not specified in the sources.",
      },
      {
        name: "Beaufort Lager",
        type: "Brand",
        context:
          "Premium activations in Chad: golf, tennis and private evenings, according to the CV.",
        year: "2024 — 2025",
      },
      {
        name: "Ecobank / Pan African Microfinance BF",
        type: "Bank · Microfinance",
        context:
          "Digital communication and web graphic redesign, according to the CV.",
        year: "2021 — 2023",
        note: "Source folder empty. No visual available.",
      },
      {
        name: "Telecel Faso / Enter Africa",
        type: "Telecom · Events",
        context:
          "Identity and print and digital materials for Bobo Games Week, according to the CV.",
        year: "2021 — 2023",
        note: "Source folder empty. No visual available.",
      },
      {
        name: "GreenMax Capital Group",
        type: "Climate finance",
        context:
          "Institutional profile, brochure and presentation pages.",
        year: "2026",
        caseSlug: "greenmax-capital",
        note: "Folder marked confidential. Only the cover is reproduced; public distribution to be validated with the client.",
      },
      {
        name: "Laborex CFAO Healthcare",
        type: "Health & pharmaceutical distribution",
        context:
          "2026 greeting card, roll-up and team notebook.",
        year: "2026",
        caseSlug: "laborex-voeux-2026",
      },
      {
        name: "Azalai Hotel Ouagadougou",
        type: "Hospitality & tourism",
        context:
          "Series of social media visuals for stays, dining and events.",
        year: "Not specified",
        caseSlug: "azalai-hotel",
        note: "Production year not specified in the sources.",
      },
    ],
  },
  {
    title: "Agencies & organisations",
    intro:
      "The projects presented here were produced within these organisations, as an independent or as team support.",
    items: [
      {
        name: "Sixième Sens SA",
        type: "Communication agency · Ouagadougou",
        context: "Creative director & senior graphic designer.",
        year: "2024 — present",
      },
      {
        name: "Mpixel Agency",
        type: "Agency · Ouagadougou",
        context: "Brand designer / General Manager.",
        year: "2021 — 2023",
      },
      {
        name: "ACIGI",
        type: "Agency · Ouagadougou",
        context: "Senior Graphic & Web Designer.",
        year: "2018 — 2021",
      },
    ],
  },
];

const emptySources = [
  {
    folder: "BDT — Chad",
    note: "No file and no mention in the CV: no role can be established.",
  },
  {
    folder: "Court of Auditors — Burkina Faso",
    note: "Reference cited in the CV (2023); no visual available.",
  },
  {
    folder: "Ecobank — Burkina Faso",
    note: "Reference cited in the CV (2021 — 2023); no visual available.",
  },
  {
    folder: "Telecel — Burkina Faso",
    note: "Reference cited in the CV (2021 — 2023, Bobo Games Week); no visual available.",
  },
];

type PersonReference = {
  name: string;
  role: string;
  organisation: string;
  missions: string;
  caseSlugs?: string[];
};

const people: PersonReference[] = [
  {
    name: "Aicha Ouedraogo",
    role: "Director",
    organisation: "Sixième Sens SA — Ouagadougou",
    missions:
      "Creative direction and graphic design carried out within the agency (2024 — present).",
  },
  {
    name: "Kambou Gabriel",
    role: "President",
    organisation: "Association of Bloggers of Burkina (ABB)",
    missions:
      "Court of Auditors (2023), Christian Aid / EDF (2021), WaterAid / Tour du Faso (2021), ABB Blog Awards (2020).",
    caseSlugs: ["christian-aid-femmes-energie", "wateraid-tour-du-faso"],
  },
  {
    name: "Audy-Fred Tetiniam",
    role: "Communications manager",
    organisation: "Danon’s Group",
    missions: "Ecobank / Pan African Microfinance Burkina Faso (2022).",
  },
  {
    name: "Frederick Laldjim Mianyo",
    role: "Former secretary",
    organisation: "CTBF",
    missions:
      "Forum of Chadians in Burkina Faso on the situation in the country (2021).",
  },
  {
    name: "Evelia Gad",
    role: "Country Manager",
    organisation: "Enter Africa / Telecel",
    missions: "Bobo Games Week, Telecel Faso & Enter Africa (2021).",
  },
  {
    name: "Konfè Dada",
    role: "Manager",
    organisation: "Konfyam — Lino natural honey",
    missions: "Visual identity, labels and packaging (2021).",
  },
];

function ReferenceRow({ reference }: { reference: Reference }) {
  const project: ProjectEn | undefined = reference.caseSlug
    ? getProjectEn(reference.caseSlug)
    : undefined;

  return (
    <li className="border-b border-line">
      <div className="grid gap-4 py-6 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          <h3 className="font-display text-[1.15rem] font-semibold leading-tight tracking-[-0.01em] text-ink">
            {reference.name}
          </h3>
          <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-slate">
            {reference.type}
          </p>
        </div>
        <div className="md:col-span-5">
          <p className="text-sm leading-relaxed text-ink/80">
            {reference.context}
          </p>
          {reference.note ? (
            <p className="mt-2 text-xs leading-relaxed text-ochre-deep">
              {reference.note}
            </p>
          ) : null}
        </div>
        <div className="flex items-start justify-between gap-4 md:col-span-3 md:justify-end">
          <span className="label-mono pt-1 text-slate">{reference.year}</span>
          {project ? (
            <Link
              href={projectHref(lang, project.slug)}
              className="group inline-flex items-center gap-2 text-xs text-ink transition-colors hover:text-teal-deep"
            >
              <span className="link-line">Case study</span>
              <ArrowIcon className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          ) : (
            <span className="label-mono pt-1 text-ink/30">CV</span>
          )}
        </div>
      </div>
    </li>
  );
}

function PersonReferenceRow({ person }: { person: PersonReference }) {
  return (
    <li className="border-b border-line">
      <div className="grid gap-4 py-6 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          <h3 className="font-display text-[1.15rem] font-semibold leading-tight tracking-[-0.01em] text-ink">
            {person.name}
          </h3>
          <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-slate">
            {person.role}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-slate">
            {person.organisation}
          </p>
        </div>
        <div className="md:col-span-5">
          <p className="text-sm leading-relaxed text-ink/80">
            {person.missions}
          </p>
          {person.caseSlugs?.length ? (
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
              {person.caseSlugs.map((slug) => {
                const project = getProjectEn(slug);
                return project ? (
                  <Link
                    key={slug}
                    href={projectHref(lang, project.slug)}
                    className="group inline-flex items-center gap-2 text-xs text-ink transition-colors hover:text-teal-deep"
                  >
                    <span className="link-line">{project.title}</span>
                    <ArrowIcon className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                ) : null;
              })}
            </div>
          ) : null}
        </div>
        <div className="flex items-start md:col-span-3 md:justify-end">
          <span className="label-mono pt-1 text-right text-slate">
            Contact on request
          </span>
        </div>
      </div>
    </li>
  );
}

export default function EnglishReferencesPage() {
  return (
    <>
      <header className="border-b border-line">
        <div className="shell grid gap-10 pb-14 pt-14 lg:grid-cols-12 lg:pb-20 lg:pt-20">
          <div className="lg:col-span-8">
            <SectionLabel index="Collaborations">References</SectionLabel>
            <h1 className="display mt-7 max-w-[14ch] text-[clamp(3rem,6.8vw,6rem)]">
              Causes, institutions, brands.
            </h1>
            <p className="text-lead mt-7 max-w-[58ch]">
              A selection of organisations for which materials were designed,
              within an agency or independently. Documented projects link to a
              case study; the others are explicitly flagged as CV citations.
            </p>
          </div>
          <aside className="self-end lg:col-span-3 lg:col-start-10">
            <p className="border-t border-ink/25 pt-4 text-sm leading-relaxed text-slate">
              No logo is reproduced on this page. Mentioning an organisation
              does not constitute official endorsement.
            </p>
          </aside>
        </div>
      </header>

      <div className="shell">
        {groups.map((group, groupIndex) => (
          <section
            key={group.title}
            className="border-b border-line py-12 md:py-16"
            {...reveal()}
          >
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <div className="flex items-baseline gap-3">
                  <span className="label-mono text-ink/30">
                    {String(groupIndex + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-xl font-semibold leading-tight tracking-[-0.01em]">
                    {group.title}
                  </h2>
                </div>
                <p className="mt-4 max-w-[32ch] text-sm leading-relaxed text-slate">
                  {group.intro}
                </p>
              </div>
              <div className="lg:col-span-9">
                <ul className="border-t border-line">
                  {group.items.map((reference) => (
                    <ReferenceRow
                      key={reference.name}
                      reference={reference}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section
        className="shell border-b border-line py-12 md:py-16"
        {...reveal()}
      >
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <div className="flex items-baseline gap-3">
              <span className="label-mono text-ink/30">04</span>
              <h2 className="font-display text-xl font-semibold leading-tight tracking-[-0.01em]">
                Professional references
              </h2>
            </div>
            <p className="mt-4 max-w-[34ch] text-sm leading-relaxed text-slate">
              People cited as references for the assignments carried out. Their
              contact details are not published in order to protect their
              privacy; they are shared on request, with their consent.
            </p>
          </div>
          <div className="lg:col-span-9">
            <ul className="border-t border-line">
              {people.map((person) => (
                <PersonReferenceRow key={person.name} person={person} />
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-slate">
              To obtain contact details, specify the assignment concerned via
              the{" "}
              <Link
                href="/en/contact/"
                className="link-line text-ink transition-colors hover:text-teal-deep"
              >
                contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="shell border-b border-line py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <div className="flex items-baseline gap-3">
              <span className="label-mono text-ink/30">05</span>
              <h2 className="font-display text-xl font-semibold leading-tight tracking-[-0.01em]">
                Sources without visuals
              </h2>
            </div>
            <p className="mt-4 max-w-[34ch] text-sm leading-relaxed text-slate">
              Four folders in the sources contain no file. They are not the
              subject of a case study; the corresponding references remain cited
              in the CV where applicable.
            </p>
          </div>
          <div className="lg:col-span-9">
            <ul className="grid gap-px border border-line bg-line sm:grid-cols-2">
              {emptySources.map((source) => (
                <li key={source.folder} className="bg-paper p-5 sm:p-6">
                  <p className="font-display text-[1.05rem] font-semibold text-ink">
                    {source.folder}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    {source.note}
                  </p>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-ochre-deep">
                    Empty source folder
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="shell py-16 md:py-20">
        <div className="grid gap-8 border border-line bg-paper-deep/50 p-6 sm:p-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="label-mono text-ochre-deep">Clarification</p>
            <h2 className="mt-3 font-display text-xl font-semibold">
              What these references do not mean
            </h2>
          </div>
          <ul className="space-y-3 text-sm leading-relaxed text-slate lg:col-span-7 lg:col-start-6">
            <li className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-2 h-1 w-3 shrink-0 bg-ochre"
              />
              No organisation mentioned officially endorses this portfolio or
              sponsors its content.
            </li>
            <li className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-2 h-1 w-3 shrink-0 bg-ochre"
              />
              No testimonial, quantitative result or impact data is presented
              without a verified source.
            </li>
            <li className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-2 h-1 w-3 shrink-0 bg-ochre"
              />
              Client visuals remain subject to the rights of the organisations
              and people represented; their distribution must be validated
              before publication.
            </li>
          </ul>
        </div>

        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-sm leading-relaxed text-slate">
            A project, organisation or programme not listed here? The
            application file can be expanded on request, subject to
            confidentiality.
          </p>
          <Cta href="/en/contact">Get in touch</Cta>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="shell flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="label-mono text-slate">Learn more</p>
          <div className="flex flex-wrap gap-6">
            <ArrowLink href="/en/about">The background</ArrowLink>
            <ArrowLink href="/en/projects">The projects</ArrowLink>
          </div>
        </div>
      </section>
    </>
  );
}
