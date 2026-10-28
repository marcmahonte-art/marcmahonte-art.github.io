"use client";

import { AppLink as Link } from "@/components/AppLink";
import { navByLang, ui, languagePaths, type Lang } from "@/data/i18n";
import { site } from "@/data/site";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowIcon } from "./ArrowIcon";
import { Logo } from "./Logo";

const normalize = (path: string) =>
  path.length > 1 ? path.replace(/\/+$/, "") : path;

function LanguageSwitch({ lang, light = false }: { lang: Lang; light?: boolean }) {
  const pathname = usePathname();
  const paths = languagePaths(pathname);
  const linkClass = light
    ? "text-paper/55 transition-colors hover:text-paper"
    : "text-ink/40 transition-colors hover:text-ink";
  const currentClass = light ? "text-paper" : "text-ink";

  return (
    <nav
      aria-label={ui[lang].header.language}
      className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em]"
    >
      <Link
        href={paths.fr}
        hrefLang="fr"
        aria-current={lang === "fr" ? "page" : undefined}
        className={lang === "fr" ? currentClass : linkClass}
      >
        FR
      </Link>
      <span aria-hidden="true" className={linkClass}>
        /
      </span>
      <Link
        href={paths.en}
        hrefLang="en"
        aria-current={lang === "en" ? "page" : undefined}
        className={lang === "en" ? currentClass : linkClass}
      >
        EN
      </Link>
    </nav>
  );
}

export function Header({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);
  const copy = ui[lang].header;
  const nav = navByLang[lang];
  const desktopNav = nav.filter(
    (item) => item.href !== "/contact" && item.href !== "/en/contact",
  );
  const contactHref = lang === "en" ? "/en/contact" : "/contact";

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      const first = panelRef.current?.querySelector<HTMLElement>(
        "[data-mobile-first]",
      );
      first?.focus();
    }, 30);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      wasOpen.current = true;
      return;
    }
    if (!wasOpen.current) return;
    wasOpen.current = false;
    triggerRef.current?.focus({ preventScroll: true });
  }, [open]);

  const isActive = (href: string) => {
    const current = normalize(pathname);
    const target = normalize(href);
    if (target === "/" || target === "/en") return current === target;
    return current === target || current.startsWith(`${target}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper">
      <div className="shell flex h-[76px] items-center justify-between gap-6">
        <Logo lang={lang} />

        <nav aria-label={copy.mainNav} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {desktopNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`relative inline-flex items-center px-3 py-2 text-[0.8125rem] transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-ink"
                      : "text-slate hover:text-ink"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3 -bottom-[1px] h-px origin-left bg-ochre transition-transform duration-300 ${
                      isActive(item.href) ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <LanguageSwitch lang={lang} />
          </div>

          <Link
            href={contactHref}
            className="hidden items-center gap-2.5 border border-ink/20 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper sm:inline-flex"
          >
            {copy.contact}
            <ArrowIcon />
          </Link>

          <button
            ref={triggerRef}
            type="button"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2.5 border border-ink/20 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink transition-colors duration-300 hover:border-ink lg:hidden"
          >
            {copy.menu}
            <span aria-hidden="true" className="flex w-4 flex-col gap-[4px]">
              <span className="h-px w-full bg-current" />
              <span className="h-px w-full bg-current" />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          ref={panelRef}
          id="menu-mobile"
          role="dialog"
          aria-modal="true"
          aria-label={copy.menuLabel}
          className="fixed inset-0 z-[60] overflow-y-auto bg-paper lg:hidden"
        >
          <div className="shell flex min-h-[100svh] flex-col pb-8 pt-5">
            <div className="flex items-center justify-between">
              <Logo lang={lang} />
              <button
                type="button"
                data-mobile-first
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2.5 border border-ink/20 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink"
              >
                {copy.close}
                <span aria-hidden="true" className="relative block h-4 w-4">
                  <span className="absolute left-0 top-1/2 h-px w-full rotate-45 bg-current" />
                  <span className="absolute left-0 top-1/2 h-px w-full -rotate-45 bg-current" />
                </span>
              </button>
            </div>

            <nav aria-label={copy.mobileNav} className="mt-10">
              <ul className="border-t border-line">
                {nav.map((item, index) => (
                  <li key={item.href} className="border-b border-line">
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className="group flex items-baseline justify-between gap-4 py-5"
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="label-mono text-ink/35">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="display text-[clamp(1.9rem,8vw,2.75rem)] text-ink">
                          {item.label}
                        </span>
                      </span>
                      <ArrowIcon className="shrink-0 text-ink/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ink" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-auto pt-12">
              <div className="mb-8">
                <LanguageSwitch lang={lang} />
              </div>
              <p className="label-mono text-slate">
                {lang === "en" ? "Direct contact" : "Contact direct"}
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-3 block font-display text-xl text-ink underline decoration-line underline-offset-4"
              >
                {site.email}
              </a>
              <p className="mt-2 text-sm text-slate">
                {lang === "en"
                  ? "Ouagadougou, Burkina Faso"
                  : "Ouagadougou, Burkina Faso"}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {site.phones.map((phone) => (
                  <a
                    key={phone.href}
                    href={`tel:${phone.href}`}
                    className="tag"
                  >
                    {phone.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
