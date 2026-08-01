import { useEffect, useState } from "react";
import { Menu, Phone, X, MessageCircle, User } from "lucide-react";
import { CONTACT, NAV_LINKS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
        <a href="#home" className="flex items-center gap-2.5" aria-label="SwiftMove home">
          <span className="grid size-10 place-items-center rounded-lg bg-primary text-primary-foreground shadow-soft">
            <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden="true">
              <path
                d="M3 8.5h9.5V17H5a2 2 0 0 1-2-2V8.5Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="M12.5 11H17l3 3.2V17h-7.5V11Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <circle cx="8" cy="18" r="1.7" stroke="currentColor" strokeWidth="1.8" />
              <circle cx="17" cy="18" r="1.7" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          </span>
          <span className="leading-none">
            <span
              className={cn(
                "block text-lg font-extrabold tracking-tight transition-colors",
                scrolled ? "text-foreground" : "text-primary-foreground",
              )}
            >
              Swift<span className="text-secondary">Move</span>
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

        <div className="hidden items-center gap-2 xl:flex">
          <a
            href={CONTACT.phoneHref}
            className={cn(
              "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition-colors",
              scrolled
                ? "text-primary hover:bg-accent"
                : "text-primary-foreground hover:bg-white/10",
            )}
          >
            <Phone className="size-4" /> {CONTACT.phone}
          </a>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg bg-success px-3 py-2 text-sm font-semibold text-success-foreground shadow-soft transition-transform hover:scale-[1.03]"
          >
            <MessageCircle className="size-4" /> WhatsApp
          </a>
          <a
            href="#booking"
            className={cn(
              "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition-colors",
              scrolled ? "text-primary hover:bg-accent" : "text-primary-foreground hover:bg-white/10",
            )}
          >
            <User className="size-4" /> Login
          </a>
          <a
            href="#booking"
            className="rounded-lg bg-secondary px-4 py-2.5 text-sm font-semibold text-secondary-foreground shadow-glow transition-transform hover:scale-[1.03]"
          >
            Book Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className={cn(
            "grid size-10 place-items-center rounded-lg transition-colors xl:hidden",
            scrolled ? "bg-accent text-primary" : "bg-white/12 text-primary-foreground",
          )}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="section-shell xl:hidden">
          <div className="mt-3 rounded-xl border border-border bg-card p-4 shadow-card">
            <nav className="grid gap-1" aria-label="Mobile">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-accent hover:text-primary"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <a
                href={CONTACT.phoneHref}
                className="flex items-center justify-center gap-2 rounded-lg border border-border px-3 py-2.5 text-sm font-semibold text-primary"
              >
                <Phone className="size-4" /> Call
              </a>
              <a
                href="#booking"
                onClick={() => setOpen(false)}
                className="rounded-lg bg-secondary px-3 py-2.5 text-center text-sm font-semibold text-secondary-foreground"
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
