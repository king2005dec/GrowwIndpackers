import { AI_FEATURES } from "@/lib/site-data";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function AiFeatures() {
  return (
    <section className="hero-gradient relative overflow-hidden py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:64px_64px]"
        aria-hidden="true"
      />
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Powered by AI"
          title="Smarter moving, powered by AI"
          body="Eight models work behind the scenes so your quote, route and crew are decided by data — not by a middleman."
          invert
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {AI_FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 0.06}>
              <article className="h-full rounded-xl border border-white/12 bg-white/[0.07] p-5 backdrop-blur-sm transition-colors hover:border-white/30 hover:bg-white/[0.12]">
                <span className="grid size-11 place-items-center rounded-lg bg-secondary/20 text-secondary">
                  <Icon name={f.icon} className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-primary-foreground">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-primary-foreground/70">
                  {f.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
