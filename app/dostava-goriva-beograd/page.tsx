import { buildMetadata } from "@/lib/metadata";
import { SITE_URL, SITE_NAME, PHONE } from "@/lib/constants";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceHero from "@/components/ServiceHero";
import CheckList from "@/components/CheckList";
import ServiceFAQSection from "@/components/ServiceFAQSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const PAGE_URL = `${SITE_URL}/dostava-goriva-beograd`;

export const metadata = buildMetadata({
  title: "Dostava Goriva na Putu Beograd",
  description:
    "Ponestalo vam je benzina ili dizela nasred puta? Donosimo gorivo direktno do vas, bilo gde u Beogradu, 24/7. Pozovite 064/9-200-200.",
  url: PAGE_URL,
});

const signs = [
  "Ponestalo vam je goriva nasred puta ili auto-puta",
  "Zaboravili ste da napunite rezervoar pre dužeg puta",
  "Najbliža pumpa je predaleko ili je zatvorena",
  "Vozite noću i u blizini nema otvorene pumpe",
  "Merač goriva pokazuje prazno, a vi ste u pokretu",
  "Vozilo se ugasilo usled nestanka goriva u saobraćaju",
];

const benefits = [
  "Dolazimo sa gorivom za oko 30 minuta",
  "Donosimo dovoljno goriva da stignete do najbliže pumpe",
  "Dostupni smo i na auto-putu i van grada uz dogovor",
  "Dostupni 24 sata dnevno, svakog dana u godini",
  "Fer i transparentna cena bez skrivenih troškova",
  "Ako je potrebno, nudimo i šlepovanje do pumpe ili servisa",
];

const faqs = [
  {
    q: "Koje vrste goriva donosite?",
    a: "Donosimo i benzin i dizel gorivo, u zavisnosti od potreba vašeg vozila. Prilikom poziva samo nam recite koje gorivo vam je potrebno.",
  },
  {
    q: "Koliko goriva mogu da dobijem?",
    a: "Donosimo količinu dovoljnu da bezbedno stignete do najbliže benzinske pumpe, gde možete da napunite rezervoar do kraja.",
  },
  {
    q: "Da li dostavljate gorivo na auto-putu?",
    a: "Da, izlazimo i na auto-put i van užeg centra Beograda uz prethodni dogovor telefonom. Recite nam tačnu lokaciju kada nas pozovete.",
  },
  {
    q: "Koliko brzo stižete sa gorivom?",
    a: "U proseku stižemo za oko 30 minuta od trenutka poziva, u zavisnosti od vaše lokacije u Beogradu i okolini.",
  },
  {
    q: "Koliko košta usluga dostave goriva?",
    a: "Cena zavisi od lokacije i količine goriva. Pozovite nas na 064/9-200-200 za brzu procenu cene, bez skrivenih troškova.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      serviceType: "Dostava i donošenje goriva",
      name: "Dostava goriva na putu Beograd",
      description:
        "Hitna dostava goriva (benzin ili dizel) na licu mesta kada vam ponestane goriva na putu, bilo gde u Beogradu, 24/7.",
      provider: {
        "@type": "LocalBusiness",
        name: SITE_NAME,
        telephone: "+381649200200",
        url: SITE_URL,
      },
      areaServed: { "@type": "City", name: "Beograd" },
      url: PAGE_URL,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Donošenje goriva",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function DostavaGorivaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />
      <main>
        <Breadcrumbs current="Donošenje goriva" />
        <ServiceHero
          eyebrow="Dostupni 24 sata, 7 dana u nedelji"
          title={
            <>
              DOSTAVA GORIVA
              <br />
              <span className="text-accent">NA PUTU</span>
            </>
          }
          subtitle="Ostali ste bez goriva nasred puta? Donosimo benzin ili dizel direktno do vas, bilo gde u Beogradu, u bilo koje doba dana."
          image="/20240603_180854-1024x576.jpg"
          imageAlt="Dostava goriva na putu Strada 46"
        />

        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                Kada je potrebno
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-primary mt-3 mb-6">
                Kada vam je potrebna dostava goriva?
              </h2>
              <p className="text-primary/70 text-lg leading-relaxed mb-8">
                Ponestalo goriva usred vožnje je stresna situacija, naročito na auto-putu ili noću
                kada su pumpe daleko. Evo kada najčešće pozivate ovu uslugu:
              </p>
              <CheckList items={signs} />
            </div>

            <div className="mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                Kako radi usluga
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-primary mt-3 mb-6">
                Gorivo direktno do vas
              </h2>
              <p className="text-primary/70 text-lg leading-relaxed">
                Pozovete nas na {PHONE}, kažete nam tip goriva koji vam je potreban (benzin ili
                dizel) i tačnu lokaciju na kojoj se nalazite. Naš vozač odmah kreće i donosi vam
                dovoljno goriva da bezbedno stignete do najbliže benzinske pumpe — bez čekanja
                šlep vozila i bez nepotrebnog stresa.
              </p>
            </div>

            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                Zašto Strada 46
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-primary mt-3 mb-6">
                Zašto izabrati nas za dostavu goriva
              </h2>
              <CheckList items={benefits} />
            </div>
          </div>
        </section>

        <ServiceFAQSection id="faq" faqs={faqs} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
