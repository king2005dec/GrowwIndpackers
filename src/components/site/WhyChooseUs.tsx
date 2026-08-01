import { WHY_US } from "@/lib/site-data";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function WhyChooseUs() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Why choose us"
          title="Every box protected. Every mile accountable."
          body="We rebuilt the moving experience around verification, insurance and pricing you can check before you commit."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07}>
              <article className="lift-card group h-full rounded-xl border border-border bg-card p-6 shadow-soft">
                <span className="grid size-12 place-items-center rounded-lg bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon name={item.icon} className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
