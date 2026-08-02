import { motion } from "framer-motion";
import { CalendarCheck, PackageCheck, Truck, Sparkles } from "lucide-react";
import { PROCESS } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";

const ICONS = [CalendarCheck, PackageCheck, Truck, Sparkles];

export function Process() {
  return (
    <section className="hero-gradient py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="How it works"
          title="From booking to unpacked"
          body="You approve the price once. We handle the rest, with checkpoint updates at every stage."
          invert
        />

        <div className="relative mt-16">
          {/* animated progress rail */}
          <div className="absolute left-0 right-0 top-7 hidden h-1 overflow-hidden rounded-full bg-white/15 lg:block">
            <motion.div
              className="h-full rounded-full bg-secondary shadow-glow"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {/* travelling truck */}
          <motion.div
            className="absolute top-0 hidden text-secondary lg:block"
            initial={{ left: "0%" }}
            whileInView={{ left: "calc(100% - 2.5rem)" }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          >
            <Truck className="size-7" />
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-4">
            {PROCESS.map((p, i) => {
              const Icon = ICONS[i % ICONS.length]!;
              return (
                <motion.div
                  key={p.step}
                  className="group relative"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.35 + i * 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.span
                    className="relative z-10 grid size-14 place-items-center rounded-2xl bg-secondary text-secondary-foreground shadow-glow"
                    whileHover={{ rotate: -6, scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 320, damping: 16 }}
                  >
                    <Icon className="size-6" />
                    <span className="absolute -right-2 -top-2 grid size-6 place-items-center rounded-full bg-primary-foreground text-[11px] font-extrabold text-primary">
                      {p.step}
                    </span>
                  </motion.span>
                  <h3 className="mt-5 text-lg font-bold text-primary-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                    {p.body}
                  </p>
                  <span className="mt-4 block h-0.5 w-0 rounded-full bg-secondary transition-all duration-500 group-hover:w-16" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
