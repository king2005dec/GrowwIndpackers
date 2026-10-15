import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

// ── Above-the-fold: load immediately ─────────────────────────────────────────
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { OfferMarquee } from "@/components/site/OfferMarquee";

// ── Below-the-fold: lazy-load so first paint is instant ──────────────────────
const WhyChooseUs  = lazy(() => import("@/components/site/WhyChooseUs").then(m => ({ default: m.WhyChooseUs })));
const About        = lazy(() => import("@/components/site/About").then(m => ({ default: m.About })));
const Services     = lazy(() => import("@/components/site/Services").then(m => ({ default: m.Services })));
const DownloadApp  = lazy(() => import("@/components/site/DownloadApp").then(m => ({ default: m.DownloadApp })));
const Reviews      = lazy(() => import("@/components/site/Reviews").then(m => ({ default: m.Reviews })));
const Cities       = lazy(() => import("@/components/site/Cities").then(m => ({ default: m.Cities })));
const LoveUs       = lazy(() => import("@/components/site/LoveUs").then(m => ({ default: m.LoveUs })));
const PromoBanner  = lazy(() => import("@/components/site/PromoBanner").then(m => ({ default: m.PromoBanner })));
const BookingForm  = lazy(() => import("@/components/site/BookingForm").then(m => ({ default: m.BookingForm })));
const Gallery      = lazy(() => import("@/components/site/Gallery").then(m => ({ default: m.Gallery })));
const Process      = lazy(() => import("@/components/site/Process").then(m => ({ default: m.Process })));
const Faq          = lazy(() => import("@/components/site/Faq").then(m => ({ default: m.Faq })));
const Contact      = lazy(() => import("@/components/site/Contact").then(m => ({ default: m.Contact })));
const Footer       = lazy(() => import("@/components/site/Footer").then(m => ({ default: m.Footer })));
const FloatingActions = lazy(() => import("@/components/site/FloatingActions").then(m => ({ default: m.FloatingActions })));

import { CONTACT, FAQS, SERVICES, SLOGAN } from "@/lib/site-data";


const SITE_URL = "https://ai-move-pro.lovable.app";
const TITLE = "Packers & Movers Mumbai | GrowwIndia Home Shifting";
const DESCRIPTION =
  "GrowwIndia Packers and Movers, Mumbai — house relocation, office shifting, bike transport, car carrier, warehouse storage and labour help. Call +91 98196 97667 for a free quote.";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MovingCompany",
      "@id": `${SITE_URL}/#organization`,
      name: "Groww India Packers and Movers",
      slogan: SLOGAN,
      url: SITE_URL,
      description: DESCRIPTION,
      telephone: CONTACT.phone,
      email: CONTACT.email,
      priceRange: "₹₹",
      address: [
        {
          "@type": "PostalAddress",
          streetAddress:
            "Shop no 7, Raaj Apartment, near D'mart, Reddy Sai Nagar, Kandivali West",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          postalCode: "400067",
          addressCountry: "IN",
        },
        {
          "@type": "PostalAddress",
          streetAddress:
            "Shop 03, Shiv Building, Swami Vivekanand Rd, Parsi Colony, Andheri West",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          postalCode: "400058",
          addressCountry: "IN",
        },
      ],
      areaServed: ["Mumbai", "Delhi NCR", "Bengaluru", "Hyderabad", "Chennai", "Pune"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Moving services",
        itemListElement: SERVICES.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, description: s.body },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "GrowwIndia Packers and Movers",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "GrowwIndia Packers and Movers" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "packers and movers Mumbai, house shifting, office shifting, bike transport, car carrier, warehouse storage, labour helpers",
      },
      { name: "geo.region", content: "IN-MH" },
      { name: "geo.placename", content: "Mumbai" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(schema) },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Above fold — renders immediately */}
        <Hero />
        <OfferMarquee />

        {/* Below fold — loads lazily after first paint */}
        <Suspense fallback={null}>
          <WhyChooseUs />
          <About />
          <Services />
          <DownloadApp />
          <Reviews />
          <Cities />
          <LoveUs />
          <PromoBanner />
          <BookingForm />
          <Gallery />
          <Process />
          <Faq />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <FloatingActions />
      </Suspense>
    </div>
  );
}
