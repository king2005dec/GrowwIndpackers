import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { OfferMarquee } from "@/components/site/OfferMarquee";
import { Hero } from "@/components/site/Hero";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { DownloadApp } from "@/components/site/DownloadApp";
import { Reviews } from "@/components/site/Reviews";
import { Cities } from "@/components/site/Cities";
import { LoveUs } from "@/components/site/LoveUs";
import { PromoBanner } from "@/components/site/PromoBanner";
import { BookingForm } from "@/components/site/BookingForm";
import { Gallery } from "@/components/site/Gallery";
import { Process } from "@/components/site/Process";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { CONTACT, FAQS } from "@/lib/site-data";

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
        <Hero />
        <OfferMarquee />
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
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
