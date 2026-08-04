import { motion } from "framer-motion";

/**
 * Side-view delivery truck that drives across its container:
 * spinning wheels, suspension bounce, exhaust puffs and a scrolling road.
 */
export function TruckRun({ label = "Your truck is on the way" }: { label?: string }) {
  return (
    <div className="relative h-28 w-full overflow-hidden rounded-2xl border border-border bg-card">
      {/* sky wash */}
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_0%,color-mix(in_oklab,var(--primary)_10%,transparent),transparent_70%)]" />

      {/* road */}
      <div className="absolute bottom-0 left-0 right-0 h-7 bg-primary/90" />
      <div className="absolute bottom-7 left-0 right-0 h-px bg-border" />
      <motion.div
        className="absolute bottom-3 left-0 flex w-[200%] gap-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      >
        {Array.from({ length: 60 }).map((_, i) => (
          <span key={i} className="h-1 w-8 shrink-0 rounded-full bg-primary-foreground/45" />
        ))}
      </motion.div>

      {/* label */}
      <span className="absolute left-4 top-3 rounded-full bg-secondary/10 px-3 py-1 text-[11px] font-bold tracking-wide text-secondary">
        {label}
      </span>

      {/* driving truck */}
      <motion.div
        className="absolute bottom-6"
        initial={{ x: "-30%" }}
        animate={{ x: "120%" }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, -1.5, 0, -1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* exhaust puffs */}
          <div className="relative">
            {[0, 0.35, 0.7].map((d) => (
              <motion.span
                key={d}
                className="absolute -left-2 bottom-3 size-2 rounded-full bg-muted-foreground/30"
                animate={{ x: [-2, -14], y: [0, -10], opacity: [0.55, 0], scale: [0.6, 1.5] }}
                transition={{ duration: 1.1, repeat: Infinity, delay: d, ease: "easeOut" }}
              />
            ))}

            <svg width="132" height="56" viewBox="0 0 132 56" fill="none">
              {/* cargo box */}
              <rect x="4" y="10" width="70" height="30" rx="4" fill="var(--primary)" />
              <rect x="10" y="16" width="58" height="8" rx="2" fill="oklch(1 0 0 / 0.18)" />
              <rect x="10" y="28" width="30" height="6" rx="2" fill="oklch(1 0 0 / 0.12)" />
              {/* cab */}
              <path
                d="M74 18h20l14 12v10H74z"
                fill="var(--secondary)"
              />
              <path d="M78 21h14l10 9H78z" fill="oklch(0.92 0.03 240)" />
              {/* bumper + lights */}
              <rect x="74" y="38" width="34" height="4" rx="2" fill="oklch(0.3 0.05 264)" />
              <circle cx="106" cy="34" r="2.4" fill="oklch(0.93 0.15 90)" />
              {/* chassis */}
              <rect x="4" y="40" width="104" height="4" rx="2" fill="oklch(0.3 0.05 264)" />
              {/* wheels */}
              {[22, 46, 92].map((cx) => (
                <g key={cx}>
                  <circle cx={cx} cy={46} r="8" fill="oklch(0.24 0.02 264)" />
                  <circle cx={cx} cy={46} r="3.4" fill="oklch(0.88 0.01 264)" />
                  <g
                    style={{
                      transformOrigin: `${cx}px 46px`,
                      animation: "spin 0.45s linear infinite",
                    }}
                  >
                    <rect x={cx - 0.6} y={40} width="1.2" height="12" fill="oklch(0.6 0.01 264)" />
                    <rect
                      x={cx - 6}
                      y={45.4}
                      width="12"
                      height="1.2"
                      fill="oklch(0.6 0.01 264)"
                    />
                  </g>
                </g>
              ))}
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
