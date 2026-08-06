import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
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

const TITLE = "GrowwIndia | Packers & Movers in India — Book Your Move";
const DESCRIPTION =
  "Book verified packers & movers across 120+ Indian cities. Instant app pricing, careful packing, live GPS tracking and no hidden charges. Get a free estimate in 60 seconds.";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MovingCompany",
      name: "GrowwIndia Logistics",
      description: DESCRIPTION,
      telephone: "+91-98765-43210",
      email: CONTACT.email,
      priceRange: "₹₹",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3rd Floor, Prestige Tech Park, Marathahalli",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        postalCode: "560103",
        addressCountry: "IN",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "6400",
      },
      areaServed: ["Mumbai", "Delhi NCR", "Bengaluru", "Hyderabad", "Chennai", "Pune"],
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
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "keywords", content: "packers and movers, house shifting, bike transport, office relocation India" },
    ],
    links: [{ rel: "canonical", href: "/" }],
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
