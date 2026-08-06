import { LOVE_US } from "@/lib/site-data";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";

export function LoveUs() {
  return (
    <section className="border-y border-border bg-surface py-14">
      <div className="section-shell">
        <p className="text-center text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
          Why people love GrowwIndia
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {LOVE_US.map((l, i) => (
            <Reveal key={l.label} delay={i * 0.05}>
              <div className="group flex flex-col items-center gap-3 rounded-xl bg-card px-3 py-6 text-center shadow-soft transition-transform hover:-translate-y-1.5">
                <span className="grid size-12 place-items-center rounded-full bg-accent text-primary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                  <Icon name={l.icon} className="size-5.5" />
                </span>
                <span className="text-sm font-semibold text-foreground">{l.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
