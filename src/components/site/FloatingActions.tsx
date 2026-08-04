import { CONTACT } from "@/lib/site-data";
import { MessageCircle, Phone } from "lucide-react";

export function FloatingActions() {
  return (
    <>
      {/* Desktop floating buttons */}
      <div className="fixed right-4 bottom-6 z-40 hidden flex-col gap-3 md:flex">
        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="grid size-14 place-items-center rounded-full bg-success text-success-foreground shadow-card transition-transform hover:scale-110 animate-pulse-ring"
        >
          <MessageCircle className="size-6" />
        </a>
        <a
          href={CONTACT.phoneHref}
          aria-label="Call SwiftMove"
          className="grid size-14 place-items-center rounded-full bg-secondary text-secondary-foreground shadow-card transition-transform hover:scale-110"
        >
          <Phone className="size-6" />
        </a>
      </div>

      {/* Mobile bottom CTA bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-3 py-2.5 backdrop-blur-xl md:hidden">
        <div className="grid grid-cols-3 gap-2">
          <a
            href="#booking"
            className="btn btn-secondary btn-sm btn-block"
          >
            Book Now
          </a>
          <a
            href={CONTACT.phoneHref}
            className="btn btn-primary btn-sm btn-block"
          >
            <Phone className="size-4" /> Call
          </a>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="btn btn-success btn-sm btn-block"
          >
            <MessageCircle className="size-4" /> Chat
          </a>
        </div>
      </div>
    </>
  );
}
