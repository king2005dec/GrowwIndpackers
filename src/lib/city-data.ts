export type CityPage = {
  slug: string;
  name: string;
  region: string;
  state: string;
  postalCode: string;
  lat: number;
  lng: number;
  moves: string;
  tagline: string;
  intro: string;
  localNote: string;
  areas: string[];
  routes: { to: string; days: string }[];
  highlights: { icon: string; title: string; body: string }[];
  services: string[];
};

export const CITY_PAGES: CityPage[] = [
  {
    slug: "mumbai",
    name: "Mumbai",
    region: "Mumbai Metropolitan Region",
    state: "Maharashtra",
    postalCode: "400067",
    lat: 19.2094,
    lng: 72.8404,
    moves: "2,480+ moves",
    tagline: "Kandivali & Andheri crews, on-call 24×7",
    intro:
      "GrowwIndia is headquartered in Mumbai with shops in Kandivali West and Andheri West, so a supervisor can survey your flat the same day you call. Our crews know the city's tight society lanes, service-lift timings and the paperwork every housing society asks for before a move.",
    localNote:
      "Most Mumbai buildings only allow shifting between 8am and 8pm and many charge a refundable lift deposit — your move manager arranges the society NOC and gate pass so the truck is never turned away.",
    areas: [
      "Kandivali",
      "Borivali",
      "Andheri West",
      "Malad",
      "Goregaon",
      "Bandra",
      "Powai",
      "Thane",
      "Navi Mumbai",
      "Dadar",
    ],
    routes: [
      { to: "Pune", days: "Next day" },
      { to: "Bengaluru", days: "3–4 days" },
      { to: "Delhi NCR", days: "4–5 days" },
      { to: "Surat", days: "1–2 days" },
    ],
    highlights: [
      {
        icon: "Building2",
        title: "High-rise ready",
        body: "Padded lift liners, stair carries and crane-free hoisting for narrow towers.",
      },
      {
        icon: "Clock",
        title: "Same-day slots",
        body: "Book before 2pm for a same-day local Mumbai shifting crew.",
      },
      {
        icon: "Warehouse",
        title: "Local storage",
        body: "Racked warehouse space in Kandivali for gap-period storage.",
      },
    ],
    services: ["House relocation", "Office shifting", "Local express", "Warehouse storage"],
  },
  {
    slug: "delhi-ncr",
    name: "Delhi NCR",
    region: "Delhi, Gurugram, Noida & Ghaziabad",
    state: "Delhi",
    postalCode: "110001",
    lat: 28.6139,
    lng: 77.209,
    moves: "2,150+ moves",
    tagline: "One crew across Delhi, Gurugram, Noida & Faridabad",
    intro:
      "One booking covers all of NCR — Delhi, Gurugram, Noida, Ghaziabad and Faridabad. Our loaders handle DDA flats, builder-floor stair carries and gated-condo entry permits, and we plan routes around the city's no-entry hours for goods vehicles.",
    localNote:
      "Commercial vehicles face daytime no-entry restrictions in inner Delhi, so long-haul loading is scheduled early morning or after 9pm to keep your delivery on time.",
    areas: [
      "Dwarka",
      "Rohini",
      "Saket",
      "Gurugram",
      "Noida",
      "Greater Noida",
      "Ghaziabad",
      "Faridabad",
      "Janakpuri",
      "Vasant Kunj",
    ],
    routes: [
      { to: "Jaipur", days: "Next day" },
      { to: "Lucknow", days: "1–2 days" },
      { to: "Mumbai", days: "4–5 days" },
      { to: "Bengaluru", days: "5–6 days" },
    ],
    highlights: [
      {
        icon: "Snowflake",
        title: "Winter-safe packing",
        body: "Moisture-barrier wrap for fog season so nothing arrives damp.",
      },
      {
        icon: "Route",
        title: "No-entry planning",
        body: "Loading timed around goods-vehicle restrictions across NCR.",
      },
      {
        icon: "Users",
        title: "Extra manpower",
        body: "Builder-floor and walk-up carries with additional trained helpers.",
      },
    ],
    services: ["House relocation", "Intercity", "Labor helpers", "Car carrier"],
  },
  {
    slug: "bengaluru",
    name: "Bengaluru",
    region: "Bengaluru Urban",
    state: "Karnataka",
    postalCode: "560001",
    lat: 12.9716,
    lng: 77.5946,
    moves: "1,940+ moves",
    tagline: "Tech-corridor moves without the weekday traffic",
    intro:
      "From Whitefield to Electronic City, we move Bengaluru's rental churn every weekend. Crews are used to apartment associations, lift-slot bookings and IT-park security clearances, and we can pack a 2BHK in a single afternoon so you make your handover deadline.",
    localNote:
      "Traffic on ORR and Sarjapur Road decides your timeline — we start loading before 7am on those corridors so unloading finishes the same day.",
    areas: [
      "Whitefield",
      "Koramangala",
      "Indiranagar",
      "HSR Layout",
      "Electronic City",
      "Marathahalli",
      "Sarjapur Road",
      "Hebbal",
      "Jayanagar",
      "Yelahanka",
    ],
    routes: [
      { to: "Hyderabad", days: "1–2 days" },
      { to: "Chennai", days: "Next day" },
      { to: "Pune", days: "2–3 days" },
      { to: "Kochi", days: "2 days" },
    ],
    highlights: [
      {
        icon: "Laptop",
        title: "IT office moves",
        body: "Weekend workstation and server-rack shifting with zero Monday downtime.",
      },
      {
        icon: "Bike",
        title: "Bike transport",
        body: "Crated two-wheeler transport, the most-booked add-on in the city.",
      },
      {
        icon: "PackageCheck",
        title: "Rental-ready packing",
        body: "Labelled cartons room-by-room for fast unpacking in a new flat.",
      },
    ],
    services: ["Office shifting", "Bike transport", "House relocation", "Packing only"],
  },
  {
    slug: "hyderabad",
    name: "Hyderabad",
    region: "Hyderabad & Secunderabad",
    state: "Telangana",
    postalCode: "500001",
    lat: 17.385,
    lng: 78.4867,
    moves: "1,320+ moves",
    tagline: "HITEC City to Old City, one accountable crew",
    intro:
      "We move families and offices across Hyderabad and Secunderabad, including the gated communities of Gachibowli and Kokapet. Villa moves with modular kitchens and heavy wardrobes are routine for our carpenter-backed crews.",
    localNote:
      "Gated communities in the financial district require prior move approval and often restrict trucks to service gates — we file the request a day ahead.",
    areas: [
      "HITEC City",
      "Gachibowli",
      "Kondapur",
      "Madhapur",
      "Kukatpally",
      "Secunderabad",
      "Banjara Hills",
      "Uppal",
      "LB Nagar",
      "Miyapur",
    ],
    routes: [
      { to: "Bengaluru", days: "1–2 days" },
      { to: "Chennai", days: "1–2 days" },
      { to: "Nagpur", days: "1–2 days" },
      { to: "Mumbai", days: "2 days" },
    ],
    highlights: [
      {
        icon: "Hammer",
        title: "Carpenter on crew",
        body: "Modular kitchen and wardrobe dismantle plus reassembly included.",
      },
      {
        icon: "Home",
        title: "Villa moves",
        body: "Multi-level villa shifting with extra loaders and padded blankets.",
      },
      {
        icon: "Truck",
        title: "Vehicle on demand",
        body: "Tempo, mini-truck or container sized to your inventory.",
      },
    ],
    services: ["House relocation", "Vehicle provide", "Labor helpers", "Intercity"],
  },
  {
    slug: "chennai",
    name: "Chennai",
    region: "Chennai & Tambaram belt",
    state: "Tamil Nadu",
    postalCode: "600001",
    lat: 13.0827,
    lng: 80.2707,
    moves: "1,110+ moves",
    tagline: "Coastal-grade packing for humid weather",
    intro:
      "Chennai's humidity and monsoon rain need different packing, so we use moisture-resistant stretch film and sealed cartons on every local move from T Nagar to OMR. Ground-floor and independent-house moves are our most common booking here.",
    localNote:
      "During the northeast monsoon we tarp every load and keep a backup slot the next morning at no extra cost if roads flood.",
    areas: [
      "T Nagar",
      "Adyar",
      "Velachery",
      "OMR",
      "Anna Nagar",
      "Porur",
      "Tambaram",
      "Guindy",
      "Perungudi",
      "Ambattur",
    ],
    routes: [
      { to: "Bengaluru", days: "Next day" },
      { to: "Hyderabad", days: "1–2 days" },
      { to: "Kochi", days: "1–2 days" },
      { to: "Pune", days: "3 days" },
    ],
    highlights: [
      {
        icon: "CloudRain",
        title: "Monsoon protection",
        body: "Tarped loads and sealed double-walled cartons through rain season.",
      },
      {
        icon: "Zap",
        title: "Local express",
        body: "Same-day short-distance city moves with a compact fast crew.",
      },
      {
        icon: "Car",
        title: "Car carrier",
        body: "Open and enclosed carriers on the Chennai–Bengaluru corridor.",
      },
    ],
    services: ["Local express", "House relocation", "Car carrier", "Packing only"],
  },
  {
    slug: "pune",
    name: "Pune",
    region: "Pune & Pimpri-Chinchwad",
    state: "Maharashtra",
    postalCode: "411001",
    lat: 18.5204,
    lng: 73.8567,
    moves: "980+ moves",
    tagline: "Next-day Mumbai–Pune expressway moves",
    intro:
      "Pune is our busiest intercity route. Loads leave Mumbai in the morning and unload in Hinjewadi, Wakad or Kharadi the same evening. Local Pune shifting inside PCMC is usually finished in a single day.",
    localNote:
      "Expressway container movement is fastest before noon, so we schedule Mumbai–Pune pickups early to avoid ghat-section slowdowns.",
    areas: [
      "Hinjewadi",
      "Wakad",
      "Baner",
      "Kharadi",
      "Viman Nagar",
      "Kothrud",
      "Hadapsar",
      "Pimpri",
      "Chinchwad",
      "Magarpatta",
    ],
    routes: [
      { to: "Mumbai", days: "Next day" },
      { to: "Ahmedabad", days: "2 days" },
      { to: "Bengaluru", days: "2–3 days" },
      { to: "Nagpur", days: "2 days" },
    ],
    highlights: [
      {
        icon: "Gauge",
        title: "Fast corridor",
        body: "Dedicated expressway vehicles for next-day Mumbai delivery.",
      },
      {
        icon: "Building2",
        title: "IT park moves",
        body: "Hinjewadi and Kharadi office shifting over the weekend.",
      },
      {
        icon: "Package",
        title: "Shared loads",
        body: "Lower-cost part-load option for small 1RK and 1BHK moves.",
      },
    ],
    services: ["Intercity", "Office shifting", "House relocation", "Local express"],
  },
  {
    slug: "ahmedabad",
    name: "Ahmedabad",
    region: "Ahmedabad & Gandhinagar",
    state: "Gujarat",
    postalCode: "380001",
    lat: 23.0225,
    lng: 72.5714,
    moves: "760+ moves",
    tagline: "Bungalow and industrial moves across Gujarat",
    intro:
      "From SG Highway apartments to Bopal bungalows, our Ahmedabad crews handle large-volume household moves and factory or workshop relocations with equal care. Warehouse storage is available while your new place is being finished.",
    localNote:
      "Summer loading is done early morning — heat above 42°C is hard on crews and on polished wood, so we avoid midday transfers.",
    areas: [
      "SG Highway",
      "Bopal",
      "Satellite",
      "Vastrapur",
      "Maninagar",
      "Chandkheda",
      "Naranpura",
      "Gota",
      "Prahlad Nagar",
      "Gandhinagar",
    ],
    routes: [
      { to: "Mumbai", days: "1–2 days" },
      { to: "Surat", days: "Next day" },
      { to: "Jaipur", days: "1–2 days" },
      { to: "Pune", days: "2 days" },
    ],
    highlights: [
      {
        icon: "Warehouse",
        title: "Storage available",
        body: "Pest-controlled warehouse space by the day or the month.",
      },
      {
        icon: "Sun",
        title: "Heat-safe timing",
        body: "Early-morning loading to protect furniture polish and crew.",
      },
      {
        icon: "Boxes",
        title: "Large volumes",
        body: "Container vehicles for bungalow and 4BHK inventories.",
      },
    ],
    services: ["House relocation", "Warehouse storage", "Vehicle provide", "Intercity"],
  },
  {
    slug: "kolkata",
    name: "Kolkata",
    region: "Kolkata & Howrah",
    state: "West Bengal",
    postalCode: "700001",
    lat: 22.5726,
    lng: 88.3639,
    moves: "690+ moves",
    tagline: "Narrow-lane and walk-up moves handled properly",
    intro:
      "Kolkata's older buildings mean narrow staircases and no lifts, so we send extra loaders and use shoulder-carry harnesses. Salt Lake and New Town moves get standard high-rise handling with lift protection.",
    localNote:
      "Many North Kolkata lanes cannot take a full truck — we shuttle with a smaller tempo to the main road at no extra charge.",
    areas: [
      "Salt Lake",
      "New Town",
      "Ballygunge",
      "Behala",
      "Howrah",
      "Garia",
      "Dum Dum",
      "Tollygunge",
      "Rajarhat",
      "Park Street",
    ],
    routes: [
      { to: "Bengaluru", days: "4–5 days" },
      { to: "Delhi NCR", days: "3–4 days" },
      { to: "Mumbai", days: "4–5 days" },
      { to: "Lucknow", days: "2–3 days" },
    ],
    highlights: [
      {
        icon: "Users",
        title: "Extra loaders",
        body: "Walk-up carries with harnesses and additional trained manpower.",
      },
      {
        icon: "Truck",
        title: "Shuttle tempo",
        body: "Small-vehicle shuttling for lanes a container can't enter.",
      },
      {
        icon: "ShieldCheck",
        title: "Fragile crating",
        body: "Custom wooden crates for antiques, glass and showcases.",
      },
    ],
    services: ["House relocation", "Labor helpers", "Packing only", "Intercity"],
  },
  {
    slug: "jaipur",
    name: "Jaipur",
    region: "Jaipur",
    state: "Rajasthan",
    postalCode: "302001",
    lat: 26.9124,
    lng: 75.7873,
    moves: "540+ moves",
    tagline: "Next-day Delhi runs, dust-proof packing",
    intro:
      "Jaipur moves are mostly Delhi-bound or local within Mansarovar, Vaishali Nagar and Jagatpura. Dry, dusty conditions mean we shrink-wrap upholstery and mattresses before anything leaves the flat.",
    localNote:
      "Old-city lanes near Walled City are restricted for large vehicles, so smaller tempos with more trips work out faster and cheaper.",
    areas: [
      "Mansarovar",
      "Vaishali Nagar",
      "Malviya Nagar",
      "Jagatpura",
      "C-Scheme",
      "Tonk Road",
      "Sanganer",
      "Jhotwara",
      "Ajmer Road",
      "Pratap Nagar",
    ],
    routes: [
      { to: "Delhi NCR", days: "Next day" },
      { to: "Ahmedabad", days: "1–2 days" },
      { to: "Mumbai", days: "2–3 days" },
      { to: "Lucknow", days: "2 days" },
    ],
    highlights: [
      {
        icon: "Wind",
        title: "Dust-proof wrap",
        body: "Shrink-wrapped sofas and mattresses for dry-region transport.",
      },
      {
        icon: "Bike",
        title: "Two-wheelers",
        body: "Crated bike transport bundled with your household load.",
      },
      {
        icon: "IndianRupee",
        title: "Locked pricing",
        body: "Quote fixed at booking — no doorstep labour surprises.",
      },
    ],
    services: ["Intercity", "Bike transport", "House relocation", "Local express"],
  },
  {
    slug: "lucknow",
    name: "Lucknow",
    region: "Lucknow",
    state: "Uttar Pradesh",
    postalCode: "226001",
    lat: 26.8467,
    lng: 80.9462,
    moves: "410+ moves",
    tagline: "Gomti Nagar to anywhere in India",
    intro:
      "Lucknow families relocating for work make up most of our bookings here, usually to Delhi, Bengaluru or Pune. Local shifting inside Gomti Nagar and Indira Nagar is typically wrapped up within a day.",
    localNote:
      "Part-load sharing keeps long-distance Lucknow moves affordable when you only have a 1BHK worth of goods.",
    areas: [
      "Gomti Nagar",
      "Indira Nagar",
      "Hazratganj",
      "Alambagh",
      "Aliganj",
      "Jankipuram",
      "Ashiyana",
      "Chinhat",
      "Rajajipuram",
      "Vibhuti Khand",
    ],
    routes: [
      { to: "Delhi NCR", days: "1–2 days" },
      { to: "Kolkata", days: "2–3 days" },
      { to: "Bengaluru", days: "4–5 days" },
      { to: "Jaipur", days: "2 days" },
    ],
    highlights: [
      {
        icon: "Package",
        title: "Part loads",
        body: "Shared-vehicle pricing for small long-distance inventories.",
      },
      {
        icon: "Headphones",
        title: "Move manager",
        body: "One person on call from survey to final unpacking.",
      },
      {
        icon: "PackageCheck",
        title: "Full packing",
        body: "Room-by-room packing with labelled, barcoded cartons.",
      },
    ],
    services: ["Intercity", "House relocation", "Packing only", "Labor helpers"],
  },
  {
    slug: "nagpur",
    name: "Nagpur",
    region: "Nagpur",
    state: "Maharashtra",
    postalCode: "440001",
    lat: 21.1458,
    lng: 79.0882,
    moves: "360+ moves",
    tagline: "India's transit hub — fast onward connections",
    intro:
      "Nagpur sits at the centre of the national highway grid, so onward connections in any direction are quick. We run household moves plus a high volume of car and bike transport through the city.",
    localNote:
      "Because most long-haul routes pass through Nagpur, part-load departures are frequent and waiting time is short.",
    areas: [
      "Dharampeth",
      "Civil Lines",
      "Manish Nagar",
      "Wardha Road",
      "Sadar",
      "Hingna",
      "Besa",
      "Trimurti Nagar",
      "Jaripatka",
      "Katol Road",
    ],
    routes: [
      { to: "Pune", days: "2 days" },
      { to: "Hyderabad", days: "1–2 days" },
      { to: "Mumbai", days: "2 days" },
      { to: "Kolkata", days: "3 days" },
    ],
    highlights: [
      {
        icon: "Car",
        title: "Car carriers",
        body: "Frequent multi-car carrier departures in every direction.",
      },
      {
        icon: "Route",
        title: "Central routing",
        body: "Short waits for shared-load departures on national highways.",
      },
      {
        icon: "Warehouse",
        title: "Transit storage",
        body: "Short-term warehouse holding between two move dates.",
      },
    ],
    services: ["Car carrier", "Bike transport", "Intercity", "Warehouse storage"],
  },
  {
    slug: "surat",
    name: "Surat",
    region: "Surat",
    state: "Gujarat",
    postalCode: "395001",
    lat: 21.1702,
    lng: 72.8311,
    moves: "330+ moves",
    tagline: "Same-day Mumbai corridor, business-friendly slots",
    intro:
      "Surat's textile and diamond trade means a lot of office, showroom and workshop shifting alongside household moves. The Mumbai corridor is short enough for next-morning delivery on most bookings.",
    localNote:
      "Showroom and workshop moves are scheduled after business hours so your shop opens on time the next day.",
    areas: [
      "Adajan",
      "Vesu",
      "Pal",
      "Katargam",
      "Piplod",
      "Athwa",
      "Udhna",
      "Varachha",
      "Dumas Road",
      "Bhatar",
    ],
    routes: [
      { to: "Mumbai", days: "Next day" },
      { to: "Ahmedabad", days: "Next day" },
      { to: "Pune", days: "1–2 days" },
      { to: "Jaipur", days: "2 days" },
    ],
    highlights: [
      {
        icon: "Store",
        title: "Showroom shifting",
        body: "After-hours commercial moves so trade never pauses.",
      },
      {
        icon: "Zap",
        title: "Quick Mumbai run",
        body: "Next-morning delivery on the Surat–Mumbai corridor.",
      },
      {
        icon: "Users",
        title: "Hourly helpers",
        body: "Trained loading manpower booked by the hour.",
      },
    ],
    services: ["Office shifting", "Intercity", "Labor helpers", "Vehicle provide"],
  },
];

export const getCity = (slug: string) => CITY_PAGES.find((c) => c.slug === slug);
