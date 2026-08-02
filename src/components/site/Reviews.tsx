import { Star } from "lucide-react";
import { Reveal } from "./Reveal";

export function Reviews() {
  return (
    <section id="rating" className="overflow-hidden bg-surface py-20 sm:py-24">
      <div className="section-shell">
        <Reveal>
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 rounded-3xl border border-border bg-card px-8 py-12 text-center shadow-card">
            <svg viewBox="0 0 24 24" className="size-12 animate-float-slow" aria-hidden="true">
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
            <p className="text-6xl font-extrabold tracking-tight text-foreground sm:text-7xl">4.8</p>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  style={{ animationDelay: `${i * 0.15}s` }}
                  className={`size-6 animate-float ${
                    i < 5 ? "fill-[#FBBC05] text-[#FBBC05]" : "text-border"
                  }`}
                />
              ))}
            </div>
            <p className="text-lg font-semibold text-primary">Rated 4.8 on Google</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
