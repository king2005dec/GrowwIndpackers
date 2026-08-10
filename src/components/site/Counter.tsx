import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export function Counter({
  to,
  suffix = "",
  duration = 1400,
  prefix = "",
}: {
  to: number;
  suffix?: string;
  duration?: number;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  useEffect(() => {
    if (!inView || !ref.current) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = Math.round(to * eased);
      if (ref.current) {
        ref.current.textContent = `${prefix}${val.toLocaleString("en-IN")}${suffix}`;
      }
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to, duration, prefix, suffix]);

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  );
}
