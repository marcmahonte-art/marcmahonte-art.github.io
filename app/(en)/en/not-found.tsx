import { Cta } from "@/components/Cta";
import { SectionLabel } from "@/components/SectionLabel";

export default function EnglishNotFound() {
  return (
    <div className="shell flex min-h-[70vh] flex-col justify-center py-20">
      <SectionLabel index="404">Error</SectionLabel>
      <h1 className="display mt-7 max-w-[15ch] text-[clamp(2.8rem,7vw,5.5rem)]">
        This page does not exist — or no longer does.
      </h1>
      <p className="text-lead mt-6 max-w-[46ch]">
        The link may be old or incomplete, or the project may have changed name.
        The portfolio remains available.
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <Cta href="/en/">Back to the homepage</Cta>
        <Cta href="/en/projects" variant="outline">
          See the projects
        </Cta>
      </div>
    </div>
  );
}
