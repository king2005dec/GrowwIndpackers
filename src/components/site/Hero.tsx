import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Calendar,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Truck,
  Navigation,
  Package,
  Loader2,
} from "lucide-react";
import { CONTACT, HOUSE_SIZES, STATS } from "@/lib/site-data";
import { Counter } from "./Counter";

const PILLS = [
  "100% Verified",
  "Insurance Included",
  "Live Tracking",
  "Same Day Moving",
  "No Hidden Charges",
];

const FLOATERS = [
  { icon: BadgeCheck, label: "Verified crew", pos: "left-[-2.5rem] top-24", delay: "0s" },
  { icon: Truck, label: "Fleet ready", pos: "left-[-1.5rem] bottom-28", delay: "1.2s" },
  { icon: Navigation, label: "GPS live", pos: "right-[-1.5rem] top-10", delay: "0.6s" },
  { icon: ShieldCheck, label: "Insured ₹10L", pos: "right-[-2rem] bottom-40", delay: "1.8s" },
  { icon: Package, label: "5-layer packing", pos: "right-6 bottom-[-1.75rem]", delay: "2.4s" },
];

export function Hero() {


  return (
    <section id="home" className="hero-gradient relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* background shapes */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-24 top-10 size-72 rounded-full bg-white/5 blur-2xl" />
        <div className="absolute right-1/3 bottom-0 size-96 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/4 size-2 rounded-full bg-white/50 animate-float" />
        <div className="absolute left-1/3 top-2/3 size-1.5 rounded-full bg-secondary/70 animate-float-slow" />
        <div className="absolute right-1/4 top-16 size-1.5 rounded-full bg-white/40 animate-float" />
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      <div className="section-shell relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass-panel px-3.5 py-1.5 text-xs font-semibold text-primary-foreground">
            <Sparkles className="size-3.5 text-secondary" />
            AI-powered relocation across 120+ Indian cities
          </span>

          <h1 className="mt-6 text-4xl leading-[1.08] font-extrabold text-primary-foreground sm:text-5xl lg:text-[3.65rem]">
            Safe. Fast. Affordable
            <span className="mt-1 block brand-gradient-text">Packers &amp; Movers</span>
            across India.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
            Trusted relocation partner with AI-powered instant pricing, verified movers, live
            tracking, secure packing and fully transparent pricing.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#booking"
              className="group inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3.5 text-sm font-semibold text-secondary-foreground shadow-glow transition-transform hover:scale-[1.03]"
            >
              Book Now
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-success px-6 py-3.5 text-sm font-semibold text-success-foreground shadow-soft transition-transform hover:scale-[1.03]"
            >
              <MessageCircle className="size-4" /> WhatsApp
            </a>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 rounded-lg glass-panel px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-white/20"
            >
              <Phone className="size-4" /> Call Now
            </a>
          </div>

          <ul className="mt-7 flex flex-wrap gap-2">
            {PILLS.map((p) => (
              <li
                key={p}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-xs font-medium text-primary-foreground/85"
              >
                <BadgeCheck className="size-3.5 text-success" /> {p}
              </li>
            ))}
          </ul>

          <dl className="mt-10 grid grid-cols-2 gap-4 border-t border-white/12 pt-8 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-extrabold text-primary-foreground sm:text-3xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </dt>
                <dd className="mt-1 text-xs text-primary-foreground/65">{s.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        {/* Quote card */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {FLOATERS.map((f) => (
            <div
              key={f.label}
              style={{ animationDelay: f.delay }}
              className={`animate-float pointer-events-none absolute z-20 hidden items-center gap-2 rounded-lg border border-white/20 bg-white/95 px-3 py-2 text-xs font-semibold text-primary shadow-card xl:flex ${f.pos}`}
            >
              <f.icon className="size-4 text-secondary" /> {f.label}
            </div>
          ))}

          <div className="relative rounded-2xl border border-white/15 bg-card p-6 shadow-card sm:p-7">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-foreground">Instant Price Calculator</h2>
                <p className="mt-1 text-xs text-muted-foreground">
                  AI estimate in seconds · no phone calls needed
                </p>
              </div>
              <span className="grid size-11 place-items-center rounded-lg bg-accent text-primary">
                <Sparkles className="size-5" />
              </span>
            </div>

            <form className="mt-5 grid gap-3.5" onSubmit={submit}>
              <div className="grid gap-3.5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-semibold text-muted-foreground">Moving from</span>
                  <div className="mt-1.5 flex items-center gap-2 rounded-lg border border-input bg-background px-3 py-2.5 focus-within:border-ring">
                    <MapPin className="size-4 text-primary" />
                    <input
                      required
                      placeholder="Mumbai"
                      className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                    />
                  </div>
                </label>
                <label className="block">
                  <span className="text-xs font-semibold text-muted-foreground">Moving to</span>
                  <div className="mt-1.5 flex items-center gap-2 rounded-lg border border-input bg-background px-3 py-2.5 focus-within:border-ring">
                    <MapPin className="size-4 text-secondary" />
                    <input
                      required
                      placeholder="Pune"
                      className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                    />
                  </div>
                </label>
                <label className="block">
                  <span className="text-xs font-semibold text-muted-foreground">House size</span>
                  <select
                    required
                    defaultValue="2 BHK"
                    className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-ring"
                  >
                    {HOUSE_SIZES.map((h) => (
                      <option key={h}>{h}</option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="text-xs font-semibold text-muted-foreground">Move date</span>
                  <div className="mt-1.5 flex items-center gap-2 rounded-lg border border-input bg-background px-3 py-2.5 focus-within:border-ring">
                    <Calendar className="size-4 text-primary" />
                    <input
                      required
                      type="date"
                      className="w-full bg-transparent text-sm outline-none"
                    />
                  </div>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-primary py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.01] disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 className="size-4 animate-spin" /> Calculating best price…
                  </>
                ) : (
                  <>
                    Get Estimate <ArrowRight className="size-4" />
                  </>
                )}
              </button>
            </form>

            {loading && (
              <div className="mt-5 grid gap-2">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="h-4 animate-pulse rounded-md bg-muted" />
                ))}
              </div>
            )}

            {done && !loading && (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-5 rounded-xl bg-primary p-5 text-primary-foreground"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/60">
                  Your AI estimate
                </p>
                <p className="mt-1.5 text-3xl font-extrabold">
                  ₹<Counter to={8000} />
                  {" – ₹"}
                  <Counter to={20000} />
                </p>
                <ul className="mt-4 grid gap-2 text-sm">
                  <li className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-primary-foreground/70">You save</span>
                    <span className="font-semibold text-success">₹3,200 vs market</span>
                  </li>
                  <li className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-primary-foreground/70">Delivery time</span>
                    <span className="font-semibold">Next day</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-primary-foreground/70">Insurance</span>
                    <span className="font-semibold">Included up to ₹10L</span>
                  </li>
                </ul>
                <a
                  href="#booking"
                  className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-secondary py-3 text-sm font-semibold text-secondary-foreground"
                >
                  Lock this price <ArrowRight className="size-4" />
                </a>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
