import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SERVICE_PAGES } from "@/lib/service-data";
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
          {SERVICE_PAGES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.06}>
              <Link
                to="/services/$service"
                params={{ service: s.slug }}
                className="lift-card press group flex h-full flex-col rounded-xl border border-border bg-card p-5 shadow-soft"
              >
                <span className="grid size-11 place-items-center rounded-lg bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                  <Icon name={s.icon} className="size-5.5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-foreground">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-secondary">
                  View details
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
