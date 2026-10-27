"use client";

import { useRef, useState } from "react";
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

const projectTypes = [
  "Rapport annuel ou publication",
  "Identité visuelle ou charte",
  "Campagne ou sensibilisation",
  "Communication institutionnelle",
  "Direction artistique ou renfort d’agence",
  "Autre demande",
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values: Fields): Errors {
  const errors: Errors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Indiquez votre nom (2 caractères minimum).";
  }

  if (!emailPattern.test(values.email.trim())) {
    errors.email = "Indiquez une adresse e-mail valide.";
  }

  if (!values.projectType) {
    errors.projectType = "Choisissez le type de projet.";
  }

  if (values.message.trim().length < 20) {
    errors.message = "Décrivez votre demande en 20 caractères minimum.";
  }

  return errors;
}

export function ContactForm() {
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

    const nextErrors = validate(values);
    setErrors(nextErrors);

    const errorFields = Object.keys(nextErrors) as (keyof Fields)[];
    if (errorFields.length > 0) {
      document.getElementById(`contact-${errorFields[0]}`)?.focus();
      return;
    }

    const subject = `Demande de collaboration — ${values.projectType}`;
    const body = [
      `Nom : ${values.name.trim()}`,
      `Organisation : ${values.organisation.trim() || "Non précisée"}`,
      `E-mail : ${values.email.trim()}`,
      `Type de projet : ${values.projectType}`,
      "",
      "Message :",
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
        <p className="label-mono text-ink/55">Comment fonctionne ce formulaire</p>
        <p className="mt-2 text-sm leading-relaxed text-slate">
          Ce site n’a pas de serveur d’envoi. Le formulaire prépare un e-mail
          dans votre logiciel de messagerie. Aucune donnée n’est stockée ni
          transmise à un service tiers par ce site.
        </p>
      </div>

      <form
        ref={formRef}
        onSubmit={onSubmit}
        noValidate
        className="mt-8 grid gap-6 sm:grid-cols-2"
      >
        <div className="field">
          <label htmlFor="contact-name">Nom et prénom *</label>
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
            Organisation <span className="normal-case tracking-normal">(facultatif)</span>
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
          <label htmlFor="contact-email">E-mail *</label>
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
          <label htmlFor="contact-projectType">Type de projet *</label>
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
              Choisir…
            </option>
            {projectTypes.map((type) => (
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
          <label htmlFor="contact-message">Votre demande *</label>
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
            Contexte, commanditaire, échéance, volume et contraintes : plus le
            brief est précis, plus la réponse sera utile.
          </p>
          {errors.message ? (
            <p id="contact-message-error" className="field-error" role="alert">
              {errors.message}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-2 flex flex-col gap-5 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-xs leading-relaxed text-slate">
            En utilisant ce formulaire, vous ouvrez votre messagerie. Aucun
            message n’est envoyé tant que vous ne validez pas vous-même
            l’e-mail.
          </p>
          <button type="submit" className="btn btn-primary shrink-0">
            Préparer l’e-mail
            <ArrowIcon />
          </button>
        </div>
      </form>

      <div aria-live="polite" aria-atomic="true">
        {mailtoHref ? (
          <div className="mt-8 border border-teal-deep/30 bg-teal-deep/[0.06] p-5">
            <p className="label-mono text-teal-deep">Message préparé</p>
            <p className="mt-3 text-sm leading-relaxed text-ink/75">
              Votre messagerie devrait s’ouvrir avec le message prérempli.
              Aucun envoi n’a été effectué par ce site. Si rien ne s’est
              ouvert, utilisez le lien ci-dessous ou écrivez directement à{" "}
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
              Ouvrir le message dans ma messagerie
              <ArrowIcon />
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
}
