import { SERVICES } from "@/lib/site-data";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section id="services" className="bg-surface py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Our services"
          title="Everything you need for a seamless move"
          body="From a single bike to a 40-desk office floor — one team, one invoice, one accountable move manager."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.06}>
              <article className="lift-card group h-full rounded-xl border border-border bg-card p-5 shadow-soft">
                <span className="grid size-11 place-items-center rounded-lg bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                  <Icon name={s.icon} className="size-5.5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-foreground">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
