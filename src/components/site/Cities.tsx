import { ArrowUpRight, Building2 } from "lucide-react";
import { CITIES } from "@/lib/site-data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Cities() {
  return (
    <section id="cities" className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Popular cities"
          title="Local crews in every major Indian city"
          body="Same standards, same pricing engine, same insurance — whichever city you move from."
        />
        <div className="mt-12 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {CITIES.map((c, i) => (
            <Reveal key={c.name} delay={(i % 4) * 0.05}>
              <a
                href="#booking"
                className="lift-card group flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-soft"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Building2 className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-bold text-foreground">{c.name}</span>
                  <span className="block text-xs text-muted-foreground">{c.moves}</span>
                </span>
                <ArrowUpRight className="ml-auto size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-secondary" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
