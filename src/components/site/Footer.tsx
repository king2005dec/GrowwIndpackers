import { useState } from "react";
import { toast } from "sonner";
import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter, Youtube } from "lucide-react";
import { CITIES, CONTACT, SERVICES } from "@/lib/site-data";

const QUICK = ["Home", "About us", "Services", "Download App", "Reviews", "Contact"];
const COMPANY = ["Our story", "Careers", "Partner with us", "Press kit", "Blog"];
const SUPPORT = ["Track my move", "Raise a claim", "Reschedule move", "Payment help", "Help centre"];

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-primary-deep text-primary-foreground">
      <div className="section-shell py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_repeat(4,0.85fr)]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid size-10 place-items-center rounded-lg bg-secondary text-secondary-foreground">
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
              <span className="text-lg font-extrabold">
                Swift<span className="text-secondary">Move</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/65">
              India&apos;s trusted packers &amp; movers network. Verified crews, insured
              shipments and pricing locked at booking — in 120+ cities.
            </p>
            <div className="mt-5 grid gap-2 text-sm">
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-secondary"
              >
                <Phone className="size-4" /> {CONTACT.phone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-secondary"
              >
                <Mail className="size-4" /> {CONTACT.email}
              </a>
            </div>
            <div className="mt-5 flex gap-2">
              {[Facebook, Instagram, Twitter, Linkedin, Youtube].map((I, i) => (
                <a
                  key={i}
                  href="#home"
                  aria-label="SwiftMove social profile"
                  className="grid size-9 place-items-center rounded-lg bg-white/8 text-primary-foreground/80 transition-colors hover:bg-secondary hover:text-secondary-foreground"
                >
                  <I className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {[
            { title: "Quick links", items: QUICK },
            { title: "Services", items: SERVICES.slice(0, 6).map((s) => s.title) },
            { title: "Cities", items: CITIES.slice(0, 6).map((c) => c.name) },
            { title: "Company", items: COMPANY },
          ].map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-primary-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 grid gap-2.5 text-sm">
                {col.items.map((it) => (
                  <li key={it}>
                    <a
                      href="#home"
                      className="text-primary-foreground/65 transition-colors hover:text-secondary"
                    >
                      {it}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 border-t border-white/10 pt-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.14em]">Support</h3>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {SUPPORT.map((s) => (
                <li key={s}>
                  <a
                    href="#contact"
                    className="text-primary-foreground/65 transition-colors hover:text-secondary"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Subscribed", {
                description: "You'll get moving tips and offers once a month.",
              });
              setEmail("");
            }}
          >
            <h3 className="text-sm font-bold uppercase tracking-[0.14em]">Newsletter</h3>
            <div className="mt-4 flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="w-full rounded-lg border border-white/15 bg-white/8 px-3.5 py-2.5 text-sm text-primary-foreground outline-none placeholder:text-primary-foreground/45 focus:border-secondary"
              />
              <button
                type="submit"
                className="rounded-lg bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground transition-transform hover:scale-[1.03]"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-shell flex flex-col items-center justify-between gap-3 py-6 pb-24 text-xs text-primary-foreground/60 sm:flex-row md:pb-6">
          <p>© {new Date().getFullYear()} SwiftMove Logistics Pvt. Ltd. All rights reserved.</p>
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
