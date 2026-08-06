import galleryPacking from "@/assets/gallery-packing.jpg";
import galleryLoading from "@/assets/gallery-loading.jpg";
import galleryFleet from "@/assets/gallery-fleet.jpg";
import galleryOffice from "@/assets/gallery-office.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import promoFamily from "@/assets/promo-family.jpg";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const SHOTS = [
  { src: galleryPacking, alt: "Mover wrapping a sofa in stretch film", label: "Packing", tall: true },
  { src: galleryLoading, alt: "Crew loading cartons into a moving truck", label: "Loading" },
  { src: galleryFleet, alt: "Fleet of GrowwIndia trucks at the depot", label: "Trucks" },
  { src: galleryOffice, alt: "Office relocation with crated equipment", label: "Office moves", tall: true },
  { src: aboutTeam, alt: "Uniformed movers carrying labelled cartons", label: "Our crews" },
  { src: promoFamily, alt: "Family settling into their new home", label: "Happy homes" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Gallery"
          title="Real moves. Real crews. Real care."
          body="Photographs from recent GrowwIndia jobs across Mumbai, Bengaluru and Delhi NCR."
        />
        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {SHOTS.map((s, i) => (
            <Reveal key={s.label} delay={(i % 3) * 0.06}>
              <figure className="group relative overflow-hidden rounded-xl border border-border shadow-soft">
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    s.tall ? "h-[420px]" : "h-[280px]"
                  }`}
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-deep/90 to-transparent px-4 py-3 text-sm font-semibold text-primary-foreground">
                  {s.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
