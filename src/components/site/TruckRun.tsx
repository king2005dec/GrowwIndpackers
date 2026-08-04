import { memo } from "react";

/**
 * Side-view delivery truck driving across its container.
 *
 * Performance notes:
 * - Pure CSS keyframes (no JS animation loop, no per-frame React re-renders).
 * - Animates only `transform` / `opacity` so every frame stays on the compositor.
 * - `will-change` + `translate3d` promote the moving layers to the GPU.
 * - Static SVG, memoised component, `prefers-reduced-motion` respected in CSS.
 */
export const TruckRun = memo(function TruckRun({
  label = "Your truck is on the way",
}: {
  label?: string;
}) {
  return (
    <div className="truck-scene relative h-24 w-full overflow-hidden rounded-2xl border border-border bg-card sm:h-28">
      {/* road */}
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-primary/90 sm:h-7" />
      <div className="absolute bottom-6 left-0 right-0 h-px bg-border sm:bottom-7" />
      <div
        className="absolute bottom-2.5 left-0 flex w-[200%] gap-6 sm:bottom-3"
        style={{
          animation: "road-scroll 1.1s linear infinite",
          willChange: "transform",
        }}
        aria-hidden="true"
      >
        {Array.from({ length: 48 }).map((_, i) => (
          <span key={i} className="h-1 w-8 shrink-0 rounded-full bg-primary-foreground/45" />
        ))}
      </div>

      <span className="absolute left-3 top-2.5 rounded-full bg-secondary/10 px-2.5 py-1 text-[10px] font-bold tracking-wide text-secondary sm:left-4 sm:top-3 sm:px-3 sm:text-[11px]">
        {label}
      </span>

      {/* driving truck */}
      <div
        className="absolute bottom-5 left-0 w-full sm:bottom-6"
        style={{
          animation: "truck-drive 6s linear infinite",
          willChange: "transform",
        }}
        aria-hidden="true"
      >
        <div
          className="w-max -translate-x-full"
          style={{ animation: "truck-bob 0.5s ease-in-out infinite" }}
        >
          <div className="relative">
            {[0, 0.35, 0.7].map((d) => (
              <span
                key={d}
                className="absolute -left-2 bottom-3 size-2 rounded-full bg-muted-foreground/30"
                style={{ animation: `exhaust-puff 1.1s ease-out ${d}s infinite` }}
              />
            ))}

            <svg
              width="132"
              height="56"
              viewBox="0 0 132 56"
              fill="none"
              className="h-11 w-auto sm:h-14"
              shapeRendering="geometricPrecision"
            >
              {/* cargo box */}
              <rect x="4" y="10" width="70" height="30" rx="4" fill="var(--primary)" />
              <rect x="10" y="16" width="58" height="8" rx="2" fill="oklch(1 0 0 / 0.18)" />
              <rect x="10" y="28" width="30" height="6" rx="2" fill="oklch(1 0 0 / 0.12)" />
              {/* cab */}
              <path d="M74 18h20l14 12v10H74z" fill="var(--secondary)" />
              <path d="M78 21h14l10 9H78z" fill="oklch(0.92 0.03 240)" />
              {/* bumper + headlight */}
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
                      transformBox: "view-box",
                      animation: "wheel-spin 0.45s linear infinite",
                      willChange: "transform",
                    }}
                  >
                    <rect x={cx - 0.6} y={40} width="1.2" height="12" fill="oklch(0.6 0.01 264)" />
                    <rect x={cx - 6} y={45.4} width="12" height="1.2" fill="oklch(0.6 0.01 264)" />
                  </g>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
});
