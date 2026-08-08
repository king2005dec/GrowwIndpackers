import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, MapPin, Phone } from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { Reveal } from "@/components/site/Reveal";
import { Icon } from "@/components/site/Icon";
import { TruckRun } from "@/components/site/TruckRun";
import { SERVICE_PAGES, getService, type ServicePage } from "@/lib/service-data";
import { CITY_PAGES } from "@/lib/city-data";
import { CONTACT } from "@/lib/site-data";

const SITE_URL = "https://ai-move-pro.lovable.app";

export const Route = createFileRoute("/services/$service")({
  loader: ({ params }) => {
    const service = getService(params.service);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Service not found | GrowwIndia" }, { name: "robots", content: "noindex" }],
      };
    }
    const s = loaderData.service;
    const title = `${s.title} Services | GrowwIndia Packers and Movers`;
    const description = `${s.short} GrowwIndia ${s.title.toLowerCase()} in Mumbai and 120+ Indian cities. Locked-in pricing, verified crews. Call ${CONTACT.phone}.`;
    const url = `${SITE_URL}/services/${s.slug}`;
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": `${url}#service`,
          name: s.title,
          description: s.intro,
          serviceType: s.title,
          provider: {
            "@type": "MovingCompany",
            name: "Groww India Packers and Movers",
            telephone: CONTACT.phone,
            email: CONTACT.email,
            url: SITE_URL,
          },
          areaServed: CITY_PAGES.map((c) => ({ "@type": "City", name: c.name })),
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: s.title, item: url },
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
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [{ type: "application/ld+json", children: JSON.stringify(schema) }],
    };
  },
  component: ServiceRoute,
});

function ServiceRoute() {
  const { service } = Route.useLoaderData() as { service: ServicePage };
  const others = SERVICE_PAGES.filter((s) => s.slug !== service.slug);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="hero-gradient relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-36">
          <div className="section-shell">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-1.5 text-xs text-primary-foreground/70"
            >
              <Link to="/" className="hover:text-primary-foreground">
                Home
              </Link>
              <span>/</span>
              <span className="text-primary-foreground">{service.title}</span>
            </nav>

            <Reveal className="mt-5 max-w-3xl">
              <span className="glass-panel inline-flex size-12 items-center justify-center rounded-lg text-primary-foreground">
                <Icon name={service.icon} className="size-6" />
              </span>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">
                {service.title}
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
                {service.intro}
              </p>
              <div className="mt-7 flex flex-wrap gap-2.5">
                <Link to="/" hash="booking" className="btn btn-secondary">
                  Get a free quote <ArrowRight className="size-4" />
                </Link>
                <a href={CONTACT.phoneHref} className="btn btn-glass">
                  <Phone className="size-4" /> {CONTACT.phone}
                </a>
              </div>
            </Reveal>

            <div className="mt-10">
              <TruckRun />
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="section-shell grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                <h2 className="text-xl font-extrabold text-foreground">What's included</h2>
                <ul className="mt-4 grid gap-3">
                  {service.includes.map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-success/12 text-success">
                        <Check className="size-3.5" />
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                <h2 className="text-xl font-extrabold text-foreground">
                  {service.title} city by city
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {CITY_PAGES.map((c) => (
                    <Link
                      key={c.slug}
                      to="/packers-and-movers/$city"
                      params={{ city: c.slug }}
                      className="inline-flex items-center gap-1.5 rounded-md bg-accent px-2.5 py-1.5 text-xs font-semibold text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      <MapPin className="size-3.5" /> {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-surface py-16 sm:py-20">
          <div className="section-shell">
            <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">Other services</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((o, i) => (
                <Reveal key={o.slug} delay={(i % 3) * 0.05}>
                  <Link
                    to="/services/$service"
                    params={{ service: o.slug }}
                    className="lift-card group flex h-full flex-col rounded-xl border border-border bg-card p-5 shadow-soft"
                  >
                    <span className="grid size-11 place-items-center rounded-lg bg-secondary/10 text-secondary">
                      <Icon name={o.icon} className="size-5.5" />
                    </span>
                    <h3 className="mt-4 text-base font-bold text-foreground">{o.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{o.short}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-secondary">
                      Learn more{" "}
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
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
