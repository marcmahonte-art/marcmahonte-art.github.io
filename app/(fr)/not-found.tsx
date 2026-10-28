import { Cta } from "@/components/Cta";
import { SectionLabel } from "@/components/SectionLabel";

export default function NotFound() {
  return (
    <div className="shell flex min-h-[70vh] flex-col justify-center py-20">
      <SectionLabel index="404">Erreur</SectionLabel>
      <h1 className="display mt-7 max-w-[15ch] text-[clamp(2.8rem,7vw,5.5rem)]">
        Cette page n’existe pas — ou plus.
      </h1>
      <p className="text-lead mt-6 max-w-[46ch]">
        Le lien est peut-être ancien, incomplet, ou le projet a changé de nom.
        Le portfolio reste accessible.
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <Cta href="/">Retour à l’accueil</Cta>
        <Cta href="/projets" variant="outline">
          Voir les projets
        </Cta>
      </div>
    </div>
  );
}
