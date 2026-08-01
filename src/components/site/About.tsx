import { ArrowRight, Check, Star } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";
import { CHECKLIST } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-2xl border border-border shadow-card">
            <img
              src={aboutTeam}
              alt="SwiftMove crew carrying labelled moving cartons out of an apartment"
              width={1200}
              height={1400}
              loading="lazy"
              className="h-[420px] w-full object-cover sm:h-[520px]"
            />
          </div>
          <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 shadow-card sm:left-8">
            <span className="grid size-11 place-items-center rounded-lg bg-success/12 text-success">
              <Star className="size-5 fill-success" />
            </span>
            <div>
              <p className="text-lg font-extrabold leading-none text-foreground">4.8 / 5</p>
              <p className="mt-1 text-xs text-muted-foreground">from 6,400+ verified reviews</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="inline-flex rounded-full bg-accent px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              About SwiftMove
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-foreground sm:text-4xl">
              A moving partner your family can actually trust
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              SwiftMove started in 2015 with four trucks in Bengaluru. Today we operate a vetted
              network of 500+ partner crews across 120 cities, moving more than 10,000 homes and
              offices a year. Every crew is verified, every carton is barcoded, and every rupee on
              your invoice is explained upfront.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              We are the only mover in India that locks your AI-generated quote at booking — so the
              number you see is the number you pay.
            </p>
          </Reveal>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {CHECKLIST.map((item, i) => (
              <Reveal key={item} delay={i * 0.05}>
                <li className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-success text-success-foreground">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.2}>
            <a
              href="#booking"
              className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.03]"
            >
              Get your free survey
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
