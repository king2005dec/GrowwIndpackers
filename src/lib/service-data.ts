export type ServicePage = {
  slug: string;
  title: string;
  icon: string;
  short: string;
  intro: string;
  includes: string[];
};

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "house-relocation",
    title: "House relocation",
    icon: "Home",
    short: "1RK to 5BHK villas moved door-to-door with full packing.",
    intro:
      "Full-service household shifting — we pack every room, dismantle furniture, load, transport and reassemble at your new home. From a 1RK studio to a five-bedroom villa, one move manager stays accountable end to end.",
    includes: [
      "Room-by-room packing with labelled cartons",
      "Furniture dismantle and reassembly",
      "Padded blankets and wooden crates for fragiles",
      "Unpacking and debris removal on delivery",
    ],
  },
  {
    slug: "office-shifting",
    title: "Office shifting",
    icon: "Building2",
    short: "Weekend IT and workstation moves with zero downtime.",
    intro:
      "Commercial relocation planned around your business hours. Workstations, server racks, files and pantry equipment are inventoried, moved over a weekend and set back up so your team logs in as usual on Monday.",
    includes: [
      "Asset inventory and numbered floor plan",
      "Anti-static packing for IT hardware",
      "Weekend and after-hours crews",
      "Workstation reassembly and cable routing",
    ],
  },
  {
    slug: "bike-transport",
    title: "Bike transport",
    icon: "Bike",
    short: "Wooden-crated two-wheeler transport with checkpoint updates.",
    intro:
      "Two-wheelers travel drained, wrapped and crated so nothing scuffs in transit. Book a bike on its own or bundle it with your household load for a lower combined rate.",
    includes: [
      "Fuel draining and battery disconnect",
      "Handlebar and tank foam wrapping",
      "Wooden crating on long routes",
      "Doorstep pickup and delivery",
    ],
  },
  {
    slug: "car-carrier",
    title: "Car carrier",
    icon: "Car",
    short: "Single and multi-car carriers across 400+ routes.",
    intro:
      "Cars move on open or enclosed multi-car carriers, never driven on their own wheels. Condition is photographed at pickup and delivery so there is no argument about a scratch later.",
    includes: [
      "Open and enclosed carrier options",
      "Photo condition report both ends",
      "Wheel-strap securing, no chassis chains",
      "Doorstep or hub pickup",
    ],
  },
  {
    slug: "local-express",
    title: "Local express",
    icon: "Zap",
    short: "Same-day city moves with fast crews and quick turnaround.",
    intro:
      "Short-distance city shifting completed the same day. Ideal for studio flats, hostel moves and single-room shifts where you need a compact crew and a fast turnaround instead of a full-day operation.",
    includes: [
      "Same-day and next-morning slots",
      "Compact 2–3 person crews",
      "Tempo sized to a small inventory",
      "Hourly, transparent pricing",
    ],
  },
  {
    slug: "vehicle-provide",
    title: "Vehicle provide",
    icon: "Truck",
    short: "Tempo, mini-truck and container vehicles on demand.",
    intro:
      "Need only the vehicle? Book a tempo, mini-truck, 17ft or 32ft container with a driver and handle the loading yourself, or add helpers by the hour.",
    includes: [
      "Tempo to 32ft container options",
      "Driver included, fuel and toll in the quote",
      "Optional loading manpower",
      "One-way and round-trip bookings",
    ],
  },
  {
    slug: "warehouse-storage",
    title: "Warehouse storage",
    icon: "Warehouse",
    short: "Racked, pest-controlled storage from a day to a year.",
    intro:
      "Gap between two move dates? Store your goods in racked, pest-controlled warehouse space billed per square foot per day, with an itemised inventory you can check any time.",
    includes: [
      "Daily to twelve-month terms",
      "Pest control and moisture monitoring",
      "Itemised inventory list",
      "Redelivery whenever you are ready",
    ],
  },
  {
    slug: "packing-only",
    title: "Packing only",
    icon: "Package",
    short: "Room-by-room professional packing with labelled cartons.",
    intro:
      "Already have transport arranged? Our packers bring all materials and pack your home professionally so nothing breaks on the road, and you keep the cartons.",
    includes: [
      "All materials brought to your door",
      "Double-walled cartons and wardrobe boxes",
      "5-layer wrapping for fragile items",
      "Clear labelling for easy unpacking",
    ],
  },
  {
    slug: "labor-helpers",
    title: "Labor helpers",
    icon: "Users",
    short: "Trained loading and unloading manpower by the hour.",
    intro:
      "Book trained loaders by the hour for stair carries, furniture shifting inside a home, or loading a vehicle you already have. Police-verified helpers, no minimum full-day charge.",
    includes: [
      "Hourly booking, minimum two hours",
      "Police-verified, trained loaders",
      "Stair carries and heavy-item shifting",
      "Trolleys and harnesses provided",
    ],
  },
  {
    slug: "intercity",
    title: "Intercity",
    icon: "Route",
    short: "Dedicated and shared-load moves between 120+ cities.",
    intro:
      "Long-distance moves on dedicated vehicles or cost-saving shared loads. You get a written ETA, checkpoint updates from your move manager and a locked-in price before the truck leaves.",
    includes: [
      "Dedicated or part-load pricing",
      "Written ETA and checkpoint updates",
      "Highway-grade crating for fragiles",
      "Doorstep delivery in the destination city",
    ],
  },
];

export const getService = (slug: string) => SERVICE_PAGES.find((s) => s.slug === slug);
export const serviceSlugByTitle = (title: string) =>
  SERVICE_PAGES.find((s) => s.title.toLowerCase() === title.toLowerCase())?.slug;
