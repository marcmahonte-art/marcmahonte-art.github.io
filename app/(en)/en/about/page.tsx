import type { Metadata } from "next";
import { ArrowIcon } from "@/components/ArrowIcon";
import { ArrowLink } from "@/components/Cta";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { SectionLabel } from "@/components/SectionLabel";
import { portrait } from "@/data/media";
import { languageAlternates } from "@/data/seo";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Background, expertise and method of Jean Marc Mahonté, senior graphic designer and independent creative director in Ouagadougou, with more than eleven years of experience in institutional visual communication.",
  alternates: languageAlternates("en", "/a-propos/", "/en/about/"),
  openGraph: {
    locale: "en_GB",
    title: "About — Jean Marc Mahonté",
    description:
      "More than eleven years of graphic design for institutions, NGOs and funder-financed programmes.",
    url: "/en/about/",
    images: ["/og/jean-marc-mahonte.jpg"],
  },
};

const principles = [
  {
    title: "Read before drawing",
    text: "Understand the mandate, audiences, funder obligations and approval chain before proposing a direction.",
  },
  {
    title: "Build systems",
    text: "A grid, a palette, templates: what holds one publication also holds the next, even when teams change.",
  },
  {
    title: "Stay legible",
    text: "Density is a constraint, not an excuse. Hierarchy, breathing space and useful images in the service of content.",
  },
];

const experience = [
  {
    period: "2024 — present",
    role: "Creative director & senior graphic designer",
    organisation: "Sixième Sens SA · Ouagadougou",
    points: [
      "Art direction for brands and institutional events, including Coris Bank International Chad and Beaufort Lager",
      "Launch identity, signage, social media and motion",
      "Design of premium materials for activations in Chad",
    ],
  },
  {
    period: "2021 — 2023",
    role: "Brand designer / General Manager",
    organisation: "Mpixel Agency · Ouagadougou",
    points: [
      "CILSS: newsletters and layout of institutional documents",
      "Christian Aid / FED project (European Union): “Women and sustainable energy” campaign, EU visibility compliance",
      "WaterAid Burkina Faso: communication for the 2021 Tour du Faso",
      "Identity and print and digital materials for Bobo Games Week (Telecel Faso & Enter Africa)",
      "Ecobank / Pan African Microfinance Burkina Faso: digital communication and web graphic redesign",
    ],
  },
  {
    period: "2018 — 2021",
    role: "Senior Graphic & Web Designer",
    organisation: "ACIGI · Ouagadougou",
    points: [
      "Complete visual identities: logo, guidelines, brochures, reports, vehicle livery",
      "Institutional materials for development projects in Burkina Faso, Chad, Benin and Côte d’Ivoire",
      "ABB multichannel communication with EU, USAID and UNFPA partners",
      "Cour des Comptes du Burkina Faso: identity and materials for the Open Days",
    ],
  },
];

export default function EnglishAboutPage() {
  return (
    <>
      <header className="shell grid gap-12 pb-16 pt-14 lg:grid-cols-12 lg:gap-10 lg:pb-20 lg:pt-20">
        <div className="lg:col-span-7">
          <SectionLabel index="Profile">About</SectionLabel>
          <h1 className="display mt-7 text-[clamp(3rem,6.8vw,6rem)]">
            Rigour,
            <br />
            in the service
            <br />
            <span className="text-teal-deep">of meaning.</span>
          </h1>
          <p className="text-lead mt-8 max-w-[52ch]">
            Senior graphic designer and independent creative director in
            Ouagadougou. More than eleven years of practice in graphic design,
            branding and institutional visual communication.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Institutional publishing",
              "Visual identity",
              "Campaigns",
              "Art direction",
            ].map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 lg:col-start-9">
          <div className="frame aspect-[4/5] overflow-hidden">
            <ResponsiveImage
              image={portrait}
              priority
              sizes="(min-width: 1024px) 30vw, 92vw"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="mt-3 flex items-start justify-between gap-4 border-t border-line pt-3 text-xs text-slate">
            <span>Jean Marc Mahonté — Ouagadougou.</span>
            <span className="label-mono shrink-0 text-ink/35">
              Real photograph
            </span>
          </div>
        </div>
      </header>

      <section className="border-y border-line bg-paper-deep/40">
        <div className="shell grid gap-10 py-16 md:py-20 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <SectionLabel index="01">Background</SectionLabel>
          </div>
          <div className="lg:col-span-7 lg:col-start-5">
            <div className="prose-editorial max-w-[62ch]">
              <p>
                A senior creative and creative director, I built my practice in
                Burkinabè agencies, working with international institutions,
                European Union-funded projects and state institutions. This
                path gave me a simple habit:{" "}
                <strong>
                  understand the framework before proposing the form.
                </strong>
              </p>
              <p>
                My projects range from the annual report to the institutional
                magazine, from brand guidelines to awareness campaigns. The
                common thread: demanding content, several levels of approval,
                heterogeneous audiences and real production constraints.
              </p>
              <p>
                I work in French and English, with programme, communication and
                management teams, both in agencies and independently. I work in
                Ouagadougou and remotely, from framing through to delivery of
                source files.
              </p>
            </div>

            <dl className="mt-10 grid gap-6 border-t border-line pt-6 sm:grid-cols-3">
              <div>
                <dt className="label-mono text-slate">Experience</dt>
                <dd className="mt-2 font-display text-3xl font-semibold">
                  11+
                </dd>
                <dd className="text-xs text-slate">years of practice</dd>
              </div>
              <div>
                <dt className="label-mono text-slate">Countries</dt>
                <dd className="mt-2 font-display text-3xl font-semibold">
                  08
                </dd>
                <dd className="text-xs leading-relaxed text-slate">
                  Burkina Faso, Chad, Côte d’Ivoire, DRC, Cameroon, Madagascar,
                  Benin, Belgium
                </dd>
              </div>
              <div>
                <dt className="label-mono text-slate">Languages</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink">
                  <span className="font-semibold">French</span> — native
                </dd>
                <dd className="text-sm leading-relaxed text-ink">
                  <span className="font-semibold">English</span> — fluent
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="shell py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <SectionLabel index="02">Principles</SectionLabel>
            <h2 className="display mt-6 max-w-[12ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              Three requirements, on every project.
            </h2>
          </div>
          <div className="grid gap-px border border-line bg-line sm:grid-cols-3 lg:col-span-8 lg:col-start-5">
            {principles.map((principle, index) => (
              <div key={principle.title} className="bg-paper p-6 sm:p-7">
                <span className="label-mono text-ink/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 font-display text-xl font-semibold leading-tight tracking-[-0.01em]">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  {principle.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line">
        <div className="shell grid gap-10 py-16 md:py-24 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <SectionLabel index="03">Experience</SectionLabel>
            <h2 className="display mt-6 max-w-[10ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              Eleven years in the field.
            </h2>
            <p className="mt-5 max-w-[30ch] text-sm leading-relaxed text-slate">
              The roles and periods below are those declared in the CV. Titles
              are reproduced without reformulation.
            </p>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <ol>
              {experience.map((job) => (
                <li
                  key={job.period}
                  className="grid gap-4 border-t border-line py-8 first:border-t-0 first:pt-0 sm:grid-cols-[9rem_1fr]"
                >
                  <span className="label-mono pt-1 text-slate">
                    {job.period}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold leading-snug tracking-[-0.01em] text-ink">
                      {job.role}
                    </h3>
                    <p className="mt-1 text-sm text-slate">{job.organisation}</p>
                    <ul className="mt-4 space-y-2">
                      {job.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm leading-relaxed text-ink/75"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1 w-2.5 shrink-0 bg-teal"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="shell py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <SectionLabel index="04">Education & tools</SectionLabel>
          </div>

          <div className="grid gap-12 sm:grid-cols-2 lg:col-span-8 lg:col-start-5">
            <div>
              <h2 className="font-display text-xl font-semibold tracking-[-0.01em]">
                Education
              </h2>
              <ul className="mt-5 space-y-5 border-t border-line pt-5">
                <li>
                  <p className="label-mono text-slate">2014</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink">
                    Certificate in Graphic Design — Graphic Design
                    Specialization, CALART
                  </p>
                </li>
                <li>
                  <p className="label-mono text-slate">2011 — 2015</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink">
                    Bachelor’s degree in computer networks and
                    telecommunications, Université Aube Nouvelle · Ouagadougou
                  </p>
                </li>
                <li>
                  <p className="label-mono text-slate">2011</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink">
                    Baccalauréat série D — Lycée Sainte Colette, Burkina Faso
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold tracking-[-0.01em]">
                Tools & skills
              </h2>
              <div className="mt-5 border-t border-line pt-5">
                <p className="label-mono text-slate">Design</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/80">
                  Adobe Illustrator, InDesign and Photoshop (declared expert
                  level), Figma, UI/UX and web design, Canva, CapCut
                </p>
              </div>
              <div className="mt-5">
                <p className="label-mono text-slate">Communication</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/80">
                  Institutional branding, EU and funder visibility, event
                  communication, art direction, visual identity and brand
                  guidelines
                </p>
              </div>
              <div className="mt-5">
                <p className="label-mono text-slate">Technical</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/80">
                  Print layout, print-ready file preparation, digital
                  adaptations, WordPress and Laravel (declared working
                  knowledge)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper-deep/60">
        <div className="shell flex flex-col gap-8 py-14 md:flex-row md:items-center md:justify-between md:py-16">
          <div>
            <p className="label-mono text-slate">Curriculum vitæ</p>
            <h2 className="display mt-4 max-w-[26ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              The full background, in one document.
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a href={site.cvPath} download className="btn btn-primary">
              Download the CV (PDF)
              <ArrowIcon direction="down" />
            </a>
            <ArrowLink href="/en/contact">Get in touch</ArrowLink>
          </div>
        </div>
      </section>
    </>
  );
}
