import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calculator as CalcIcon, Loader2, ShieldCheck } from "lucide-react";
import { CITY_OPTIONS, HOUSE_SIZES } from "@/lib/site-data";
import { Counter } from "./Counter";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const VEHICLES = ["Tata Ace (Mini truck)", "Tempo 14ft", "Container 17ft", "Container 22ft"];

const BASE_BY_SIZE: Record<string, number> = {
  "1 RK": 7000,
  "1 BHK": 11000,
  "2 BHK": 17000,
  "3 BHK": 24000,
  "4 BHK": 32000,
  "5 BHK / Villa": 42000,
  Office: 38000,
};

const VEHICLE_UPLIFT: Record<string, number> = {
  "Tata Ace (Mini truck)": 0,
  "Tempo 14ft": 2500,
  "Container 17ft": 5200,
  "Container 22ft": 8800,
};

export function PriceCalculator() {
  const [form, setForm] = useState({
    from: "Mumbai",
    to: "Pune",
    size: "2 BHK",
    floor: "2",
    lift: "Yes",
    date: "",
    vehicle: "Tempo 14ft",
    packing: true,
    insurance: true,
  });
  const [loading, setLoading] = useState(false);
  const [shown, setShown] = useState(false);

  const quote = useMemo(() => {
    const base = (BASE_BY_SIZE[form.size] ?? 15000) + (VEHICLE_UPLIFT[form.vehicle] ?? 0);
    const floors = Math.max(0, Number(form.floor) || 0);
    const labour = form.lift === "Yes" ? 0 : floors * 650;
    const packing = form.packing ? Math.round(base * 0.18) : 0;
    const insurance = form.insurance ? Math.round(base * 0.015) : 0;
    const subtotal = base + labour + packing + insurance;
    const discount = Math.round(subtotal * 0.1);
    const gst = Math.round((subtotal - discount) * 0.18);
    return {
      base,
      labour,
      packing,
      insurance,
      discount,
      gst,
      total: subtotal - discount + gst,
    };
  }, [form]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setShown(false);
    window.setTimeout(() => {
      setLoading(false);
      setShown(true);
    }, 1200);
  };

  const field =
    "mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-ring";

  return (
    <section id="pricing" className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Transparent pricing"
          title="Build your exact quote in under a minute"
          body="Adjust the details and watch the estimate update. No sales call required, no hidden doorstep charges."
        />

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <form
              onSubmit={submit}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-semibold text-muted-foreground">Moving from</span>
                  <select
                    className={field}
                    value={form.from}
                    onChange={(e) => setForm({ ...form, from: e.target.value })}
                  >
                    {CITY_OPTIONS.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="text-xs font-semibold text-muted-foreground">Moving to</span>
                  <select
                    className={field}
                    value={form.to}
                    onChange={(e) => setForm({ ...form, to: e.target.value })}
                  >
                    {CITY_OPTIONS.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="text-xs font-semibold text-muted-foreground">House size</span>
                  <select
                    className={field}
                    value={form.size}
                    onChange={(e) => setForm({ ...form, size: e.target.value })}
                  >
                    {HOUSE_SIZES.map((h) => (
                      <option key={h}>{h}</option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="text-xs font-semibold text-muted-foreground">Floor</span>
                  <input
                    type="number"
                    min={0}
                    max={40}
                    className={field}
                    value={form.floor}
                    onChange={(e) => setForm({ ...form, floor: e.target.value })}
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold text-muted-foreground">Lift available</span>
                  <select
                    className={field}
                    value={form.lift}
                    onChange={(e) => setForm({ ...form, lift: e.target.value })}
                  >
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-xs font-semibold text-muted-foreground">Move date</span>
                  <input
                    type="date"
                    className={field}
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-xs font-semibold text-muted-foreground">Vehicle</span>
                  <select
                    className={field}
                    value={form.vehicle}
                    onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
                  >
                    {VEHICLES.map((v) => (
                      <option key={v}>{v}</option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {(
                  [
                    ["packing", "Professional packing"],
                    ["insurance", "Transit insurance"],
                  ] as const
                ).map(([key, label]) => (
                  <button
                    type="button"
                    key={key}
                    onClick={() => setForm({ ...form, [key]: !form[key] })}
                    className={`flex items-center justify-between rounded-lg border px-4 py-3 text-sm font-medium transition-colors ${
                      form[key]
                        ? "border-primary bg-accent text-primary"
                        : "border-border bg-background text-muted-foreground"
                    }`}
                  >
                    {label}
                    <span
                      className={`ml-3 h-5 w-9 rounded-full p-0.5 transition-colors ${form[key] ? "bg-primary" : "bg-border"}`}
                    >
                      <span
                        className={`block size-4 rounded-full bg-background transition-transform ${form[key] ? "translate-x-4" : ""}`}
                      />
                    </span>
                  </button>
                ))}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-secondary py-3.5 text-sm font-semibold text-secondary-foreground shadow-glow transition-transform hover:scale-[1.01] disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 className="size-4 animate-spin" /> Crunching 100k+ invoices…
                  </>
                ) : (
                  <>
                    <CalcIcon className="size-4" /> Calculate my price
                  </>
                )}
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="overflow-hidden rounded-2xl bg-primary text-primary-foreground shadow-card">
              <div className="hero-gradient px-6 py-7 sm:px-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">
                  Estimated total
                </p>
                {loading ? (
                  <div className="mt-3 h-10 w-48 animate-pulse rounded-lg bg-white/15" />
                ) : (
                  <motion.p
                    key={shown ? quote.total : "idle"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-4xl font-extrabold sm:text-[2.75rem]"
                  >
                    ₹<Counter to={quote.total} duration={1100} />
                  </motion.p>
                )}
                <p className="mt-2 text-sm text-primary-foreground/70">
                  {form.from} → {form.to} · {form.size} · {form.vehicle}
                </p>
              </div>

              <div className="grid gap-3 px-6 py-7 sm:px-8">
                {[
                  ["Base moving charge", quote.base],
                  ["Labour / staircase", quote.labour],
                  ["Packing material & crew", quote.packing],
                  ["Transit insurance", quote.insurance],
                  ["Season discount (10%)", -quote.discount],
                  ["GST (18%)", quote.gst],
                ].map(([label, value]) => (
                  <div
                    key={label as string}
                    className="flex items-center justify-between border-b border-white/10 pb-2 text-sm last:border-0"
                  >
                    <span className="text-primary-foreground/70">{label as string}</span>
                    <span
                      className={`font-semibold ${(value as number) < 0 ? "text-success" : ""}`}
                    >
                      {(value as number) < 0 ? "-" : ""}₹
                      {Math.abs(value as number).toLocaleString("en-IN")}
                    </span>
                  </div>
                ))}
                <div className="mt-2 flex items-center justify-between rounded-lg bg-white/10 px-4 py-3">
                  <span className="text-sm font-semibold">Grand total</span>
                  <span className="text-xl font-extrabold">
                    ₹{quote.total.toLocaleString("en-IN")}
                  </span>
                </div>
                <p className="flex items-center gap-2 text-xs text-primary-foreground/65">
                  <ShieldCheck className="size-4 text-success" /> Price locked at booking · free
                  cancellation up to 24h
                </p>
                <a
                  href="#booking"
                  className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-secondary py-3.5 text-sm font-semibold text-secondary-foreground transition-transform hover:scale-[1.01]"
                >
                  Book at this price <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
