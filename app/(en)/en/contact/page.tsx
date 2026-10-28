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
    "Contact Jean Marc Mahonté, senior graphic designer and independent creative director in Ouagadougou, for a report, a visual identity, a campaign or art direction.",
  alternates: languageAlternates("en", "/contact/", "/en/contact/"),
  openGraph: {
    locale: "en_GB",
    title: "Contact — Jean Marc Mahonté",
    description:
      "A report, an identity, a campaign? Let’s talk about the context, the constraints and the schedule.",
    url: "/en/contact/",
    images: ["/og/jean-marc-mahonte.jpg"],
  },
};

export default function EnglishContactPage() {
  return (
    <>
      <header className="border-b border-line">
        <div className="shell grid gap-10 pb-14 pt-14 lg:grid-cols-12 lg:gap-10 lg:pb-16 lg:pt-20">
          <div className="lg:col-span-7">
            <SectionLabel index="Contact">Write</SectionLabel>
            <h1 className="display mt-7 max-w-[14ch] text-[clamp(3rem,6.4vw,5.6rem)]">
              Let’s talk about your publication.
            </h1>
            <p className="text-lead mt-7 max-w-[54ch]">
              Annual report, identity, campaign or team support: describe the
              context, the commissioning organisation and the deadline. I reply
              personally by e-mail.
            </p>
            <p className="mt-4 max-w-[54ch] text-sm leading-relaxed text-slate">
              Based in Ouagadougou, I work on site and remotely, in French and
              English.
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
                <dt className="label-mono text-slate">Phone</dt>
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
                <dt className="label-mono text-slate">Location</dt>
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
                    Download the CV (PDF, French)
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
          <h2 className="sr-only">Contact form</h2>
          <ContactForm lang="en" />
        </div>

        <aside className="lg:col-span-4 lg:col-start-9">
          <div className="border-t border-ink/25 pt-5">
            <p className="label-mono text-slate">For a call for tenders</p>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              If possible, attach the terms of reference, the schedule, the
              volume of pages or materials, the languages and the commissioning
              organisation’s brand rules. These elements make it possible to
              frame a response without further exchange.
            </p>
          </div>

          <div className="mt-8 border-t border-line pt-5">
            <p className="label-mono text-slate">What I can look at</p>
            <ul className="mt-3 flex flex-col gap-2.5">
              {[
                "Annual reports and publications",
                "Brand guidelines and identity systems",
                "Print, social and event campaigns",
                "Redesign or harmonisation of materials",
                "Art direction and team support",
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
            <p className="label-mono text-slate">Transparency</p>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              This site is static and has no database. No form is stored on a
              server. The “Prepare the e-mail” button opens your mail client
              with a pre-filled message, which you remain free to send or not.
            </p>
          </div>

          <div className="mt-8 bg-ink p-5 text-paper on-dark">
            <p className="label-mono text-paper/50">Direct contact</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 block break-words font-display text-lg font-semibold text-paper underline decoration-paper/30 underline-offset-4 transition-colors hover:text-ochre"
            >
              {site.email}
            </a>
            <div className="mt-4">
              <ArrowLink href="/en/projects" tone="light" className="text-xs">
                See the projects before writing
              </ArrowLink>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
