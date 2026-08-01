import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/site-data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Faq() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions people ask before booking"
          body="Everything about pricing, insurance, timelines and claims — answered plainly."
        />
        <Reveal className="mt-12">
          <Accordion
            type="single"
            collapsible
            className="mx-auto max-w-3xl divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card px-2 shadow-soft"
          >
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-0">
                <AccordionTrigger className="px-4 text-left text-sm font-semibold text-foreground hover:no-underline sm:text-base">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="px-4 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
