import realTruckRed from "@/assets/real-truck-red.jpg";
import realTruckWhite from "@/assets/real-truck-white.jpg";
import realHomePacking from "@/assets/real-home-packing.jpg";
import realWarehouseStorage from "@/assets/real-warehouse-storage.jpg";
import realBikePacking from "@/assets/real-bike-packing.jpg";
import realBoxesStacked from "@/assets/real-boxes-stacked.jpg";
import realScooterPacking from "@/assets/real-scooter-packing.jpg";
import realDoorstepPacking from "@/assets/real-doorstep-packing.jpg";
import realTableWrapping from "@/assets/real-table-wrapping.jpg";
import realTruckLoadedInside from "@/assets/real-truck-loaded-inside.jpg";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const SHOTS = [
  { src: realTruckRed, alt: "GrowwIndia S.M.D container moving truck", label: "S.M.D Container Truck", tall: true },
  { src: realHomePacking, alt: "Multi-layer stretch film household furniture packing", label: "Living Room Furniture Lamination" },
  { src: realTruckLoadedInside, alt: "Inside container truck loaded with stretch wrapped furniture", label: "Container Truck Loaded Cargo" },
  { src: realTruckWhite, alt: "Tata local shifting truck with covered tarpaulin", label: "Local Shifting Tata Truck", tall: true },
  { src: realBikePacking, alt: "Two-wheeler motorcycle bubble & stretch film wrapping", label: "Motorcycle Bubble Wrapping" },
  { src: realScooterPacking, alt: "Scooter & Activa bubble film lamination in logistics hub", label: "Scooter Lamination & Packing", tall: true },
  { src: realBoxesStacked, alt: "Barcoded & labeled moving cartons stack", label: "Barcoded Moving Cartons Stack" },
  { src: realTableWrapping, alt: "Dining table and furniture shrink wrap protection", label: "Dining Table & Furniture Wrapping" },
  { src: realDoorstepPacking, alt: "Doorstep goods and heavy carton packing", label: "Doorstep Goods & Box Packing", tall: true },
  { src: realWarehouseStorage, alt: "Logistics warehouse facility with stacked packed cargo", label: "Logistics Warehouse & Storage" },
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
                  decoding="async"
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
