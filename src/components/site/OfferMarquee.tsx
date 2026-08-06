import { memo } from "react";
import { Gift, Sparkles, Truck } from "lucide-react";

const ITEMS = [
  "First order — get 20% OFF",
  "Verified crews across 120+ cities",
  "Packing material included",
  "No hidden charges, price locked at booking",
  "Book in 60 seconds on the GrowwIndia app",
];

const ICONS = [Gift, Sparkles, Truck];

function Row() {
  return (
    <ul className="flex shrink-0 items-center gap-10 pr-10" aria-hidden="true">
      {ITEMS.map((t, i) => {
        const Icon = ICONS[i % ICONS.length]!;
        return (
          <li
            key={t}
            className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-primary-foreground"
          >
            <Icon className="size-4 text-secondary" />
            {t}
          </li>
        );
      })}
    </ul>
  );
}

export const OfferMarquee = memo(function OfferMarquee() {
  return (
    <div className="relative overflow-hidden bg-primary-deep py-3">
      <p className="sr-only">First order — get 20% off your GrowwIndia booking.</p>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-primary-deep to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-primary-deep to-transparent" />
      <div className="flex w-max animate-marquee will-change-transform">
        <Row />
        <Row />
      </div>
    </div>
  );
});
