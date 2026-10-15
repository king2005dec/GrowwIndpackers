import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 40;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));

          const max = document.documentElement.scrollHeight - window.innerHeight;
          const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
          if (progressRef.current) {
            progressRef.current.style.transform = `scaleX(${ratio})`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-400",
        scrolled
          ? "border-b border-border/70 bg-background/80 py-2 shadow-soft backdrop-blur-xl"
          : "bg-transparent py-4",
      )}
    >
      <div className="section-shell flex items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-2.5" aria-label="GrowwIndia home">
          <img
            src="/logo-icon.jpg"
            alt="GrowwIndia Packers & Movers"
            className="size-10 sm:size-11 rounded-xl object-contain bg-white shadow-soft ring-1 ring-border/20 p-0.5"
          />
          <span className="leading-none">
            <span
              className={cn(
                "block text-lg font-extrabold tracking-tight transition-colors",
                scrolled ? "text-foreground" : "text-primary-foreground",
              )}
            >
              Groww<span className="text-secondary">India</span>
            </span>
            <span
              className={cn(
                "text-[10px] font-medium uppercase tracking-[0.22em] transition-colors",
                scrolled ? "text-muted-foreground" : "text-primary-foreground/70",
              )}
            >
              Packers &amp; Movers
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                scrolled
                  ? "text-muted-foreground hover:bg-accent hover:text-primary"
                  : "text-primary-foreground/80 hover:bg-white/10 hover:text-primary-foreground",
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#booking" className="btn btn-secondary btn-sm press hidden xl:inline-flex">
            Book Now
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className={cn(
              "press grid size-10 place-items-center rounded-lg transition-colors xl:hidden",
              scrolled ? "bg-accent text-primary" : "bg-white/12 text-primary-foreground",
            )}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        ref={progressRef}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left bg-secondary will-change-transform"
        style={{ transform: "scaleX(0)" }}
        aria-hidden="true"
      />

      {open && (
        <div className="section-shell xl:hidden">
          <div className="anim-slide-down mt-3 rounded-xl border border-border bg-card p-4 shadow-card">
            <nav className="grid gap-1" aria-label="Mobile">
              {NAV_LINKS.map((l, i) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{ animationDelay: `${i * 40}ms` }}
                  className="anim-tap-in press rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-accent hover:text-primary"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="mt-3 grid gap-2">
              <a
                href="#booking"
                onClick={() => setOpen(false)}
                className="btn btn-secondary btn-sm btn-block press"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
