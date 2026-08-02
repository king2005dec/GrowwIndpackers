import { ArrowRight, MessageCircle } from "lucide-react";
import promoFamily from "@/assets/promo-family.jpg";
import { CONTACT } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function PromoBanner() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <Reveal>
          <div className="hero-gradient relative overflow-hidden rounded-3xl shadow-card">
            <div className="grid items-center gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:pr-0">
              <div>
                <span className="inline-flex rounded-full bg-white/12 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-primary-foreground">
                  First order offer
                </span>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight text-primary-foreground sm:text-4xl">
                  First order?
                  <span className="block brand-gradient-text">Get 20% off</span>
                </h2>
                <p className="mt-4 max-w-md text-base text-primary-foreground/75">
                  New customers save a flat 20% on their first SwiftMove booking — packing
                  material, insurance and unpacking still included.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#booking"
                    className="group inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3.5 text-sm font-semibold text-secondary-foreground shadow-glow transition-transform hover:scale-[1.03]"
                  >
                    Book Now
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href={CONTACT.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-success px-6 py-3.5 text-sm font-semibold text-success-foreground transition-transform hover:scale-[1.03]"
                  >
                    <MessageCircle className="size-4" /> WhatsApp
                  </a>
                </div>
              </div>
              <img
                src={promoFamily}
                alt="Family celebrating in their new home surrounded by moving boxes"
                width={1200}
                height={900}
                loading="lazy"
                className="h-64 w-full rounded-2xl object-cover shadow-card lg:h-[360px] lg:rounded-l-2xl lg:rounded-r-none"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
