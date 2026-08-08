import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, MapPin, Phone, Route as RouteIcon, Star } from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { Reveal } from "@/components/site/Reveal";
import { Icon } from "@/components/site/Icon";
import { TruckRun } from "@/components/site/TruckRun";
import { CITY_PAGES, getCity, type CityPage as CityData } from "@/lib/city-data";
import { serviceSlugByTitle } from "@/lib/service-data";
import { CONTACT, SLOGAN } from "@/lib/site-data";

const SITE_URL = "https://ai-move-pro.lovable.app";

export const Route = createFileRoute("/packers-and-movers/$city")({
  loader: ({ params }) => {
    const city = getCity(params.city);
    if (!city) throw notFound();
    return { city };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "City not found | GrowwIndia" }, { name: "robots", content: "noindex" }],
      };
    }
    const c = loaderData.city;
    const title = `Packers and Movers in ${c.name} | GrowwIndia`;
    const description = `${c.name} packers and movers by GrowwIndia — house relocation, office shifting, bike and car transport, storage and labour help across ${c.region}. ${c.moves} completed. Call ${CONTACT.phone}.`;
    const url = `${SITE_URL}/packers-and-movers/${c.slug}`;
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MovingCompany",
          "@id": `${url}#localbusiness`,
          name: `Groww India Packers and Movers — ${c.name}`,
          slogan: SLOGAN,
          url,
          description,
          telephone: CONTACT.phone,
          email: CONTACT.email,
          priceRange: "₹₹",
          address: {
            "@type": "PostalAddress",
            addressLocality: c.name,
            addressRegion: c.state,
            postalCode: c.postalCode,
            addressCountry: "IN",
          },
          geo: { "@type": "GeoCoordinates", latitude: c.lat, longitude: c.lng },
          areaServed: [
            { "@type": "City", name: c.name },
            ...c.areas.map((a) => ({ "@type": "Place", name: `${a}, ${c.name}` })),
          ],
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `Moving services in ${c.name}`,
            itemListElement: c.services.map((s) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: `${s} in ${c.name}` },
            })),
          },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: `Packers and Movers in ${c.name}`, item: url },
          ],
        },
      ],
    };

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "robots", content: "index, follow, max-image-preview:large" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:locale", content: "en_IN" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "geo.placename", content: c.name },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [{ type: "application/ld+json", children: JSON.stringify(schema) }],
    };
  },
  component: CityPage,
});

function CityPage() {
  const { city } = Route.useLoaderData() as { city: CityData };
  const others = CITY_PAGES.filter((c) => c.slug !== city.slug).slice(0, 8);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="hero-gradient relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-36">
          <div className="section-shell relative">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-1.5 text-xs text-primary-foreground/70"
            >
              <Link to="/" className="hover:text-primary-foreground">
                Home
              </Link>
              <span>/</span>
              <span className="text-primary-foreground">Packers and Movers in {city.name}</span>
            </nav>

            <Reveal className="mt-5 max-w-3xl">
              <span className="glass-panel inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold text-primary-foreground">
                <MapPin className="size-3.5" /> {city.region}
              </span>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">
                Packers and Movers in{" "}
                <span className="brand-gradient-text">{city.name}</span>
              </h1>
              <p className="mt-3 text-base font-medium text-primary-foreground/80">
                {city.tagline}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75 sm:text-base">
                {city.intro}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-2.5">
                <Link to="/" hash="booking" className="btn btn-secondary">
                  Book your {city.name} move <ArrowRight className="size-4" />
                </Link>
                <a href={CONTACT.phoneHref} className="btn btn-glass">
                  <Phone className="size-4" /> {CONTACT.phone}
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-primary-foreground/75">
                <span className="inline-flex items-center gap-1.5">
                  <Star className="size-4 fill-secondary text-secondary" /> 4.8 on Google
                </span>
                <span>{city.moves} in {city.name}</span>
                <span>{SLOGAN}</span>
              </div>
            </Reveal>

            <div className="mt-10">
              <TruckRun />
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-16 sm:py-20">
          <div className="section-shell">
            <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">
              Why {city.name} families book GrowwIndia
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {city.highlights.map((h, i) => (
                <Reveal key={h.title} delay={i * 0.06}>
                  <article className="lift-card h-full rounded-xl border border-border bg-card p-5 shadow-soft">
                    <span className="grid size-11 place-items-center rounded-lg bg-secondary/10 text-secondary">
                      <Icon name={h.icon} className="size-5.5" />
                    </span>
                    <h3 className="mt-4 text-base font-bold text-foreground">{h.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-6">
              <p className="rounded-xl border border-border bg-surface p-5 text-sm leading-relaxed text-muted-foreground">
                <strong className="text-foreground">Local tip:</strong> {city.localNote}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Services in this city -> service pages */}
        <section className="bg-surface py-16 sm:py-20">
          <div className="section-shell">
            <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">
              Most booked services in {city.name}
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {city.services.map((s, i) => {
                const slug = serviceSlugByTitle(s);
                if (!slug) return null;
                return (
                  <Reveal key={s} delay={i * 0.05}>
                    <Link
                      to="/services/$service"
                      params={{ service: slug }}
                      className="lift-card group flex h-full flex-col rounded-xl border border-border bg-card p-5 shadow-soft"
                    >
                      <span className="text-sm font-bold text-foreground">
                        {s} in {city.name}
                      </span>
                      <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-secondary">
                        View service{" "}
                        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Areas + routes */}
        <section className="py-16 sm:py-20">
          <div className="section-shell grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                <h2 className="text-xl font-extrabold text-foreground">
                  Areas we cover in {city.name}
                </h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {city.areas.map((a) => (
                    <li
                      key={a}
                      className="rounded-md bg-accent px-2.5 py-1.5 text-xs font-semibold text-accent-foreground"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                <h2 className="text-xl font-extrabold text-foreground">
                  Popular routes from {city.name}
                </h2>
                <ul className="mt-4 grid gap-2.5">
                  {city.routes.map((r) => (
                    <li
                      key={r.to}
                      className="flex items-center justify-between rounded-lg border border-border/70 px-3.5 py-2.5 text-sm"
                    >
                      <span className="inline-flex items-center gap-2 font-semibold text-foreground">
                        <RouteIcon className="size-4 text-secondary" /> {city.name} → {r.to}
                      </span>
                      <span className="text-xs font-medium text-muted-foreground">{r.days}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/services/$service" params={{ service: "intercity" }} className="btn btn-outline btn-sm mt-5">
                  Intercity moving details
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Other cities */}
        <section className="bg-surface py-16 sm:py-20">
          <div className="section-shell">
            <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">
              We also move from these cities
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {others.map((o, i) => (
                <Reveal key={o.slug} delay={(i % 4) * 0.04}>
                  <Link
                    to="/packers-and-movers/$city"
                    params={{ city: o.slug }}
                    className="lift-card group flex items-center gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-soft"
                  >
                    <MapPin className="size-4 shrink-0 text-secondary" />
                    <span className="truncate">{o.name}</span>
                    <ArrowRight className="ml-auto size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
