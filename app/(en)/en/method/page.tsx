import type { Metadata } from "next";
import { Cta } from "@/components/Cta";
import { SectionLabel } from "@/components/SectionLabel";
import { languageAlternates } from "@/data/seo";
import { reveal } from "@/lib/reveal";

export const metadata: Metadata = {
  title: "Method",
  description:
    "A seven-step working method: brief, framing, design, production, validation, source-file delivery and archiving.",
  alternates: languageAlternates("en", "/methodologie/", "/en/method/"),
  openGraph: {
    locale: "en_GB",
    title: "Method — Jean Marc Mahonté",
    description:
      "Brief, framing, design, production, validation, delivery and archiving: a clear process for teams and funders.",
    url: "/en/method/",
  },
};

const steps = [
  {
    title: "Brief",
    description:
      "Understand the real request, the audience, the commissioning organisation, the deadline and the approval chain. The brief can be an existing document or a conversation to structure.",
    input: "Framing note, terms of reference or initial discussion",
    output: "Restatement of the issues and constraints",
  },
  {
    title: "Framing",
    description:
      "Define the scope: formats, volumes, languages, adaptations, photographic sources, brand rules and funder obligations. This is the stage where production surprises are avoided.",
    input: "Brand guidelines, logos, texts, images, visibility obligations",
    output: "Production scope and work schedule",
  },
  {
    title: "Design",
    description:
      "Build the editorial and graphic direction: grid, typographic hierarchy, palette, image treatment and data principles. An argued proposal, not an accumulation of effects.",
    input: "Stabilised content or working version",
    output: "Art direction and reference layout",
  },
  {
    title: "Production",
    description:
      "Lay out all content, produce maps, diagrams and adaptations, prepare files for print and digital. Every material is checked in its final format.",
    input: "Content validated as the work progresses",
    output: "Production files and print proofs",
  },
  {
    title: "Validation",
    description:
      "Organise rounds of feedback with stakeholders: management, programme, communication, funder. Versions are tracked and decisions documented.",
    input: "Consolidated comments from the team",
    output: "Approved final version",
  },
  {
    title: "Source-file delivery",
    description:
      "Deliver organised working files — InDesign, Illustrator, Photoshop or Figma depending on the project — with links, fonts used and final exports. Teams can take the document forward.",
    input: "Final approval",
    output: "Organised sources, print and digital exports",
  },
  {
    title: "Archiving",
    description:
      "Keep a structured copy of the project: sources, exports, images and production notes. A sound base for updates, later editions and teams taking over.",
    input: "Project closed",
    output: "Reference archive and production documentation",
  },
];

const collaborations = [
  {
    title: "Full assignment",
    text: "From brief to source-file delivery, for a report, an identity or a campaign.",
  },
  {
    title: "Ongoing support",
    text: "Art direction and advice across several materials, supporting a communication team.",
  },
  {
    title: "Agency support",
    text: "Embedded in an existing team for a production or a peak period, respecting the end client’s framework.",
  },
];

export default function EnglishMethodPage() {
  return (
    <>
      <header className="border-b border-line">
        <div className="shell grid gap-10 pb-14 pt-14 lg:grid-cols-12 lg:pb-20 lg:pt-20">
          <div className="lg:col-span-8">
            <SectionLabel index="07 steps">Method</SectionLabel>
            <h1 className="display mt-7 max-w-[15ch] text-[clamp(3rem,6.6vw,5.8rem)]">
              A simple method, followed through.
            </h1>
            <p className="text-lead mt-7 max-w-[58ch]">
              Design does not arrive at the end, once the text is ready. It
              begins as soon as the content is structured, with one question:
              what should the reader understand, and in what order?
            </p>
          </div>
          <aside className="self-end lg:col-span-3 lg:col-start-10">
            <p className="border-t border-ink/25 pt-4 text-sm leading-relaxed text-slate">
              This is the method applied to the projects presented here. It
              adapts to the format of the assignment, not the other way round.
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
                  <p className="label-mono text-slate">You provide</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/80">
                    {step.input}
                  </p>
                </div>
                <div className="border-t border-line pt-4">
                  <p className="label-mono text-teal-deep">I produce</p>
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
            <SectionLabel index="Collaboration">Three frameworks</SectionLabel>
            <h2 className="display mt-6 max-w-[12ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              Adapting to the existing framework.
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
            <p className="label-mono text-slate">Communication</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/80">
              One identified contact, explicit validation points and a record of
              decisions.
            </p>
          </div>
          <div>
            <p className="label-mono text-slate">Tools</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/80">
              Adobe InDesign, Illustrator and Photoshop, Figma. Organised files
              and suitable exports.
            </p>
          </div>
          <div>
            <p className="label-mono text-slate">Languages</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/80">
              Work in French and English. Careful review of institutional
              terminology.
            </p>
          </div>
          <div>
            <p className="label-mono text-slate">Framework</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/80">
              Respect for brand guidelines, funder rules and the confidentiality
              of materials shared.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-ink text-paper on-dark">
        <div className="shell flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <div>
            <p className="label-mono text-paper/50">Start</p>
            <h2 className="display mt-4 max-w-[24ch] text-[clamp(2rem,3.8vw,3.2rem)] text-paper">
              A brief can be imperfect. The method is there to clarify it.
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Cta href="/en/contact" variant="light">
              Get in touch
            </Cta>
            <Cta href="/en/projects" variant="ghost-light">
              See the projects
            </Cta>
          </div>
        </div>
      </section>
    </>
  );
}
