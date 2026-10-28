"use client";

import { useRef, useState } from "react";
import { ui, type Lang } from "@/data/i18n";
import { site } from "@/data/site";
import { ArrowIcon } from "./ArrowIcon";

type Fields = {
  name: string;
  organisation: string;
  email: string;
  projectType: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const initialValues: Fields = {
  name: "",
  organisation: "",
  email: "",
  projectType: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values: Fields, lang: Lang): Errors {
  const errors: Errors = {};
  const copy = ui[lang].contactForm.errors;

  if (values.name.trim().length < 2) {
    errors.name = copy.name;
  }

  if (!emailPattern.test(values.email.trim())) {
    errors.email = copy.email;
  }

  if (!values.projectType) {
    errors.projectType = copy.projectType;
  }

  if (values.message.trim().length < 20) {
    errors.message = copy.message;
  }

  return errors;
}

export function ContactForm({ lang = "fr" }: { lang?: Lang }) {
  const copy = ui[lang].contactForm;
  const [values, setValues] = useState<Fields>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [mailtoHref, setMailtoHref] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const update = (field: keyof Fields, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) =>
      current[field] ? { ...current, [field]: undefined } : current,
    );
    setMailtoHref(null);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(values, lang);
    setErrors(nextErrors);

    const errorFields = Object.keys(nextErrors) as (keyof Fields)[];
    if (errorFields.length > 0) {
      document.getElementById(`contact-${errorFields[0]}`)?.focus();
      return;
    }

    const subject = `${copy.subject}${values.projectType}`;
    const body = [
      `${copy.labels.name}: ${values.name.trim()}`,
      `${copy.labels.organisation}: ${
        values.organisation.trim() || copy.labels.unspecified
      }`,
      `${copy.labels.email}: ${values.email.trim()}`,
      `${copy.labels.projectType}: ${values.projectType}`,
      "",
      `${copy.labels.message}:`,
      values.message.trim(),
    ].join("\n");

    const href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setMailtoHref(href);
    window.location.href = href;
  };

  return (
    <div>
      <div className="border-l-2 border-ochre bg-paper-deep/70 px-5 py-4">
        <p className="label-mono text-ink/55">{copy.howTitle}</p>
        <p className="mt-2 text-sm leading-relaxed text-slate">
          {copy.howBody}
        </p>
      </div>

      <form
        ref={formRef}
        onSubmit={onSubmit}
        noValidate
        className="mt-8 grid gap-6 sm:grid-cols-2"
      >
        <div className="field">
          <label htmlFor="contact-name">{copy.name}</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={errors.name ? "true" : undefined}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            required
          />
          {errors.name ? (
            <p id="contact-name-error" className="field-error" role="alert">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="field">
          <label htmlFor="contact-organisation">
            {copy.organisation}{" "}
            <span className="normal-case tracking-normal">
              {copy.optional}
            </span>
          </label>
          <input
            id="contact-organisation"
            name="organisation"
            type="text"
            autoComplete="organization"
            value={values.organisation}
            onChange={(event) => update("organisation", event.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="contact-email">{copy.email}</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={errors.email ? "true" : undefined}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            required
          />
          {errors.email ? (
            <p id="contact-email-error" className="field-error" role="alert">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div className="field">
          <label htmlFor="contact-projectType">{copy.projectType}</label>
          <select
            id="contact-projectType"
            name="projectType"
            value={values.projectType}
            onChange={(event) => update("projectType", event.target.value)}
            aria-invalid={errors.projectType ? "true" : undefined}
            aria-describedby={
              errors.projectType ? "contact-projectType-error" : undefined
            }
            required
          >
            <option value="" disabled>
              {copy.choose}
            </option>
            {copy.types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.projectType ? (
            <p
              id="contact-projectType-error"
              className="field-error"
              role="alert"
            >
              {errors.projectType}
            </p>
          ) : null}
        </div>

        <div className="field sm:col-span-2">
          <label htmlFor="contact-message">{copy.message}</label>
          <textarea
            id="contact-message"
            name="message"
            rows={6}
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
            aria-invalid={errors.message ? "true" : undefined}
            aria-describedby={
              errors.message ? "contact-message-error" : "contact-message-hint"
            }
            required
          />
          <p id="contact-message-hint" className="mt-1 text-xs text-slate">
            {copy.messageHint}
          </p>
          {errors.message ? (
            <p id="contact-message-error" className="field-error" role="alert">
              {errors.message}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-5 border-t border-line pt-6 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-xs leading-relaxed text-slate">
            {copy.privacy}
          </p>
          <button type="submit" className="btn btn-primary shrink-0">
            {copy.submit}
            <ArrowIcon />
          </button>
        </div>
      </form>

      <div aria-live="polite" aria-atomic="true">
        {mailtoHref ? (
          <div className="mt-8 border border-teal-deep/30 bg-teal-deep/[0.06] p-5">
            <p className="label-mono text-teal-deep">{copy.prepared}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink/75">
              {copy.preparedBody}{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-medium text-teal-deep underline underline-offset-2"
              >
                {site.email}
              </a>
              .
            </p>
            <a
              href={mailtoHref}
              className="mt-4 inline-flex items-center gap-2 border border-teal-deep px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-teal-deep transition-colors hover:bg-teal-deep hover:text-paper"
            >
              {copy.open}
              <ArrowIcon />
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
}
