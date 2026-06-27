import { buildMetadata } from "@/lib/metadata";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import ServiceArea from "@/components/ServiceArea";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = buildMetadata({
  title: "Slep Služba Beograd",
  description:
    "Strada 46 — brza slep služba u Beogradu. Šlep, deblokada i prevoz vozila, dostupni 24/7. Kumodraz, Beograd. Pozovite 064/9-200-200.",
});

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRepair"],
  name: "Slep Služba Strada 46",
  telephone: "+381649200200",
  url: "https://strada46.rs",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kumodraž",
    addressLocality: "Beograd",
    addressCountry: "RS",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 44.7333,
    longitude: 20.5167,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  areaServed: {
    "@type": "City",
    name: "Beograd",
  },
  priceRange: "$$",
  description:
    "Brza i pouzdana slep služba u Beogradu. Šlep, deblokada i prevoz vozila. Dostupni 24/7.",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <WhyUs />
        <Process />
        <ServiceArea />
        <Gallery />
        <Testimonials />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
