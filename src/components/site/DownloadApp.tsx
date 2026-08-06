import { ArrowRight, Apple, Calculator, Package, ShieldCheck, Smartphone, Truck } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { TruckRun } from "./TruckRun";

const POINTS = [
  { icon: Calculator, title: "Instant price in the app", body: "Enter your route and home size — the app shows the full price breakup." },
  { icon: Package, title: "Book & track in one place", body: "Manage packing, loading and delivery updates from your phone." },
  { icon: ShieldCheck, title: "Locked-in fare", body: "The price you accept in the app is the price you pay at the doorstep." },
];

export function DownloadApp() {
  return (
    <section id="pricing" className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Pricing on your phone"
          title="Want to calculate your price? Download the GrowwIndia Packers & Movers app"
          body="Full price calculator, live order tracking and exclusive app-only discounts — all inside the GrowwIndia Packers & Movers app."
        />

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-2xl bg-primary text-primary-foreground shadow-card">
            {/* running truck strip */}
            <div className="p-4 sm:p-5">
              <TruckRun label="On the move" />
            </div>

            <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h3 className="text-2xl font-extrabold sm:text-3xl">
                  Price calculator now lives in the app
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-primary-foreground/75">
                  We moved the calculator to the GrowwIndia Packers &amp; Movers app so your quote,
                  booking and tracking stay in one place. Download it free and get your estimate in
                  under a minute.
                </p>

                <ul className="mt-7 grid gap-3">
                  {POINTS.map((p, i) => (
                    <Reveal key={p.title} delay={i * 0.07}>
                      <li className="flex items-start gap-3 rounded-xl border border-white/12 bg-white/[0.07] p-4">
                        <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-secondary/20 text-secondary">
                          <p.icon className="size-5" />
                        </span>
                        <div>
                          <p className="text-sm font-bold">{p.title}</p>
                          <p className="mt-1 text-sm text-primary-foreground/70">{p.body}</p>
                        </div>
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col justify-center gap-3 rounded-2xl border border-white/12 bg-white/[0.05] p-6">
                <span className="grid size-12 place-items-center rounded-xl bg-secondary text-secondary-foreground">
                  <Smartphone className="size-6" />
                </span>
                <p className="text-lg font-bold">GrowwIndia Packers &amp; Movers</p>
                <p className="text-sm text-primary-foreground/70">
                  Free download · 4.8★ rated · 1M+ moves priced
                </p>
                <a
                  href="https://play.google.com/store/search?q=GrowwIndia%20Packers%20Movers&c=apps"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary btn-block mt-2"
                >
                  <Smartphone className="size-4" /> Get it on Google Play
                </a>
                <div className="btn btn-glass btn-block cursor-default opacity-80">
                  <Apple className="size-4" /> App Store — coming soon
                </div>
                <a
                  href="#booking"
                  className="btn btn-glass btn-block"
                >
                  Or book without the app <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
