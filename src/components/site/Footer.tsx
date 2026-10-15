import { useState } from "react";
import { toast } from "sonner";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import { CITIES, CONTACT, SERVICES, SLOGAN } from "@/lib/site-data";

const QUICK = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Download App", href: "#pricing" },
  { label: "Cities", href: "#cities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Book a move", href: "#booking" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-primary-deep text-primary-foreground">
      <div className="section-shell py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.2fr]">
          <div>
            <div className="flex flex-col items-start gap-2">
              <a href="#home" aria-label="GrowwIndia home" className="inline-block">
                <img
                  src="/logo.jpg"
                  alt="Groww India Packers & Movers"
                  className="h-16 w-auto rounded-xl bg-white p-1.5 shadow-card"
                />
              </a>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/65">
              Groww India Packers and Movers — verified crews, careful shipments and pricing
              locked at booking, across Mumbai and 120+ cities.
            </p>
            <div className="mt-5 grid gap-2 text-sm">
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-secondary"
              >
                <Phone className="size-4" /> {CONTACT.phone}
              </a>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-secondary"
              >
                <MessageCircle className="size-4" /> WhatsApp us
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 break-all text-primary-foreground/80 hover:text-secondary"
              >
                <Mail className="size-4 shrink-0" /> {CONTACT.email}
              </a>
            </div>
            <div className="mt-5 flex gap-2">
              {[Facebook, Instagram, Twitter, Linkedin, Youtube].map((I, i) => (
                <a
                  key={i}
                  href="#home"
                  aria-label="GrowwIndia social profile"
                  className="grid size-9 place-items-center rounded-lg bg-white/8 text-primary-foreground/80 transition-colors hover:bg-secondary hover:text-secondary-foreground"
                >
                  <I className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.14em]">Quick links</h3>
            <ul className="mt-4 grid gap-2.5 text-sm">
              {QUICK.map((q) => (
                <li key={q.label}>
                  <a
                    href={q.href}
                    className="text-primary-foreground/65 transition-colors hover:text-secondary"
                  >
                    {q.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.14em]">Services</h3>
            <ul className="mt-4 grid gap-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.title}>
                  <a
                    href="#services"
                    className="text-primary-foreground/65 transition-colors hover:text-secondary"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.14em]">Head office</h3>
            <p className="mt-4 text-sm font-semibold">{CONTACT.officeName}</p>
            <ul className="mt-3 grid gap-3 text-sm text-primary-foreground/65">
              {CONTACT.offices.map((addr) => (
                <li key={addr} className="flex gap-2">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-secondary" />
                  <span className="leading-relaxed">{addr}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs uppercase tracking-[0.14em] text-primary-foreground/50">
              Serving {CITIES.length}+ major cities
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-10">
          <form
            className="mx-auto max-w-xl text-center"
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Subscribed", {
                description: "You'll get moving tips and offers once a month.",
              });
              setEmail("");
            }}
          >
            <h3 className="text-sm font-bold uppercase tracking-[0.14em]">Newsletter</h3>
            <p className="mt-2 text-sm text-primary-foreground/65">
              Moving tips and app-only offers, once a month.
            </p>
            <div className="mt-4 flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="w-full rounded-lg border border-white/15 bg-white/8 px-3.5 py-2.5 text-sm text-primary-foreground outline-none placeholder:text-primary-foreground/45 focus:border-secondary"
              />
              <button type="submit" className="btn btn-secondary btn-sm">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-shell flex flex-col items-center justify-between gap-3 py-6 pb-24 text-xs text-primary-foreground/60 sm:flex-row md:pb-6">
          <p>
            © {new Date().getFullYear()} Groww India Packers and Movers. All rights reserved.
          </p>
          <ul className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map((l) => (
              <li key={l}>
                <a href="#home" className="hover:text-secondary">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
