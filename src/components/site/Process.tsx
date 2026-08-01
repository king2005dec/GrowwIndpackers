import { PROCESS } from "@/lib/site-data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Process() {
  return (
    <section className="hero-gradient py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="How it works"
          title="Four steps from booking to unpacked"
          body="You approve the price once. We handle the rest, with checkpoint updates at every stage."
          invert
        />

        <div className="relative mt-14">
          <div
            className="absolute left-0 right-0 top-6 hidden h-px bg-white/20 lg:block"
            aria-hidden="true"
          />
          <div className="grid gap-8 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.12}>
                <div className="relative">
                  <span className="relative z-10 grid size-12 place-items-center rounded-full bg-secondary text-sm font-extrabold text-secondary-foreground shadow-glow">
                    {p.step}
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-primary-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
