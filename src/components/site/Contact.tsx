import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { CONTACT } from "@/lib/site-data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const cards = [
    {
      icon: Phone,
      title: "Call us",
      lines: [CONTACT.phone, "Mon–Sun, 7am – 11pm"],
      href: CONTACT.phoneHref,
      cta: "Call now",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      lines: ["Instant quotes & move updates", "Average reply in 2 minutes"],
      href: CONTACT.whatsapp,
      cta: "Start chat",
    },
    {
      icon: Mail,
      title: "Email",
      lines: [CONTACT.email, "Replies within 4 hours"],
      href: `mailto:${CONTACT.email}`,
      cta: "Send email",
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Talk to a move manager, not a call centre"
          body="Reach us however you like — the same team handles quotes, move updates and claims."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.07}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="lift-card group flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-soft"
              >
                <span className="grid size-12 place-items-center rounded-lg bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <c.icon className="size-5.5" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-foreground">{c.title}</h3>
                {c.lines.map((l) => (
                  <p key={l} className="mt-1 text-sm text-muted-foreground">
                    {l}
                  </p>
                ))}
                <span className="mt-4 text-sm font-semibold text-secondary">{c.cta} →</span>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-surface p-6">
              <h3 className="flex items-center gap-2 text-base font-bold text-foreground">
                <MapPin className="size-4 text-secondary" /> Head office
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{CONTACT.office}</p>
              <p className="mt-auto text-sm text-muted-foreground">
                Walk-ins welcome — ask for the relocation desk on the 3rd floor.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-surface p-6">
              <h3 className="flex items-center gap-2 text-base font-bold text-foreground">
                <Clock className="size-4 text-secondary" /> Business hours
              </h3>
              <ul className="grid gap-1.5 text-sm text-muted-foreground">
                <li className="flex justify-between">
                  <span>Mon – Fri</span> <span className="font-medium">7:00 – 23:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span> <span className="font-medium">7:00 – 22:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span> <span className="font-medium">8:00 – 20:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Support line</span>{" "}
                  <span className="font-medium text-success">24 × 7</span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
