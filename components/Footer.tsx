import { AppLink as Link } from "@/components/AppLink";
import { site } from "@/data/site";
import { ArrowIcon } from "./ArrowIcon";
import { Cta } from "./Cta";
import { Logo } from "./Logo";
import { SectionLabel } from "./SectionLabel";

export function Footer() {
  return (
    <footer className="on-dark bg-ink text-paper">
      <div className="shell pb-10 pt-20 md:pt-24">
        <SectionLabel tone="light" index="Fin">
          Contact
        </SectionLabel>

        <div className="mt-10 grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <h2 className="display max-w-[15ch] text-[clamp(2.6rem,5.2vw,4.75rem)] text-paper">
              Un projet à rendre lisible&nbsp;?
            </h2>
            <p className="mt-6 max-w-[46ch] text-[0.9375rem] leading-relaxed text-paper/65">
              Rapports, identités, campagnes : parlons du contexte, des
              contraintes et de ce que le design doit accomplir.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Cta href="/contact" variant="light">
                Démarrer la conversation
              </Cta>
              <Cta href={`mailto:${site.email}`} variant="ghost-light">
                Écrire un e-mail
              </Cta>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-5">
            <div>
              <p className="label-mono text-paper/40">Coordonnées</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-4 block break-words text-[0.9375rem] text-paper transition-colors hover:text-ochre"
              >
                {site.email}
              </a>
              <div className="mt-3 flex flex-col gap-1.5">
                {site.phones.map((phone) => (
                  <a
                    key={phone.href}
                    href={`tel:${phone.href}`}
                    className="text-[0.9375rem] text-paper/70 transition-colors hover:text-paper"
                  >
                    {phone.label}
                  </a>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-paper/55">
                {site.location}
              </p>
            </div>

            <div>
              <p className="label-mono text-paper/40">Navigation</p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {site.nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[0.9375rem] text-paper/70 transition-colors hover:text-paper"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href={site.cvPath}
                    download
                    className="inline-flex items-center gap-2 text-[0.9375rem] text-paper/70 transition-colors hover:text-paper"
                  >
                    CV (PDF)
                    <ArrowIcon className="h-3 w-3" direction="down" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-paper/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Logo tone="light" />
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper/40">
            Ouagadougou · Burkina Faso · {new Date().getFullYear()}
          </p>
        </div>

        <p className="mt-8 max-w-4xl text-xs leading-relaxed text-paper/40">
          Les noms, organisations et marques cités sur ce site le sont à titre
          de références professionnelles. Leur mention n’implique aucune
          approbation officielle ni aucun partenariat institutionnel non
          confirmé. Les visuels appartiennent à leurs commanditaires
          respectifs et sont reproduits dans un cadre de présentation
          professionnelle.
        </p>
      </div>
    </footer>
  );
}
