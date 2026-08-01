import { BadgeCheck, Star } from "lucide-react";
import { REVIEWS } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";

function ReviewCard({ r }: { r: (typeof REVIEWS)[number] }) {
  const initials = r.name
    .split(" ")
    .map((n) => n[0])
    .join("");
  return (
    <article className="w-[330px] shrink-0 rounded-xl border border-border bg-card p-5 shadow-soft">
      <div className="flex items-center gap-3">
        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent text-sm font-bold text-primary">
          {initials}
        </span>
        <div className="min-w-0">
          <p className="flex items-center gap-1.5 text-sm font-bold text-foreground">
            {r.name}
            <BadgeCheck className="size-4 text-success" />
          </p>
          <p className="truncate text-xs text-muted-foreground">{r.city}</p>
        </div>
        <svg viewBox="0 0 24 24" className="ml-auto size-5 shrink-0" aria-hidden="true">
          <path
            fill="#4285F4"
            d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h6.4a5.5 5.5 0 0 1-2.4 3.6v3h3.9c2.3-2.1 3.6-5.2 3.6-8.7Z"
          />
          <path
            fill="#34A853"
            d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.9-3a7.2 7.2 0 0 1-10.7-3.8H1.3v3.1A12 12 0 0 0 12 24Z"
          />
          <path fill="#FBBC05" d="M5.3 14.3a7.2 7.2 0 0 1 0-4.6V6.6H1.3a12 12 0 0 0 0 10.8l4-3.1Z" />
          <path
            fill="#EA4335"
            d="M12 4.8c1.8 0 3.4.6 4.6 1.8l3.4-3.4A12 12 0 0 0 1.3 6.6l4 3.1A7.2 7.2 0 0 1 12 4.8Z"
          />
        </svg>
      </div>
      <div className="mt-3 flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`size-4 ${i < r.stars ? "fill-[#FBBC05] text-[#FBBC05]" : "text-border"}`}
          />
        ))}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
    </article>
  );
}

export function Reviews() {
  const loop = [...REVIEWS, ...REVIEWS];
  return (
    <section id="reviews" className="overflow-hidden bg-surface py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Customer reviews"
          title="6,400+ families rated us 4.8 on Google"
          body="Real reviews from real moves — every one of them verified against a completed booking."
        />
      </div>

      <div className="group relative mt-12 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="flex w-max gap-5 animate-marquee group-hover:[animation-play-state:paused]">
          {loop.map((r, i) => (
            <ReviewCard key={`${r.name}-${i}`} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
