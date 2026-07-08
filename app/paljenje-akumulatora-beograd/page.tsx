import { buildMetadata } from "@/lib/metadata";
import { SITE_URL, SITE_NAME, PHONE } from "@/lib/constants";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceHero from "@/components/ServiceHero";
import CheckList from "@/components/CheckList";
import ServiceFAQSection from "@/components/ServiceFAQSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const PAGE_URL = `${SITE_URL}/paljenje-akumulatora-beograd`;

export const metadata = buildMetadata({
  title: "Paljenje Akumulatora Kablovima Beograd",
  description:
    "Ostali ste bez akumulatora? Dolazimo za oko 30 minuta i palimo vozilo pomoćnim kablovima na licu mesta, bilo gde u Beogradu. Dostupni 24/7 — pozovite 064/9-200-200.",
  url: PAGE_URL,
});

const signs = [
  "Vozilo se ne pali ili se sporo okreće",
  "Instrument tabla i svetla su slabi ili trepere",
  "Ostavljena su upaljena svetla ili se vrata nisu dobro zatvorila",
  "Akumulator je star ili je vozilo dugo stajalo",
  "Hladno vreme je ispraznilo akumulator preko noći",
  "Čuje se samo jedan „klik” zvuk kada okrenete ključ",
];

const benefits = [
  "Dolazak na lokaciju za oko 30 minuta",
  "Bezbedno paljenje bez rizika po elektroniku vozila",
  "Iskusni vozači i profesionalna oprema",
  "Dostupni 24 sata dnevno, svakog dana",
  "Fer i transparentna cena bez iznenađenja",
  "Ako akumulator ne može da se upali, nudimo šlep do servisa",
];

const faqs = [
  {
    q: "Da li paljenje kablovima može da ošteti auto-elektroniku?",
    a: "Ne, ukoliko se radi pravilno. Naši vozači koriste ispravnu opremu i poštuju tačan redosled povezivanja kablova, tako da je rizik po elektroniku vozila sveden na minimum.",
  },
  {
    q: "Šta ako paljenje kablovima ne upali vozilo?",
    a: "Ukoliko je akumulator potpuno neispravan ili postoji drugi kvar, na licu mesta vam nudimo šlepovanje do servisa, vulkanizera ili adrese po vašem izboru.",
  },
  {
    q: "Koliko brzo stižete?",
    a: "Na teritoriji Beograda u proseku stižemo za oko 30 minuta od poziva. Odmah po prijavi naš vozač kreće ka vama.",
  },
  {
    q: "Da li radite noću i vikendom?",
    a: "Da, dostupni smo 24 sata dnevno, 7 dana u nedelji, uključujući praznike. Kvar akumulatora ne bira vreme, ni mi ne biramo kada dolazimo.",
  },
  {
    q: "Koliko košta usluga paljenja akumulatora?",
    a: "Cena zavisi od lokacije i vremena dolaska. Pozovite nas na 064/9-200-200 za brzu i besplatnu procenu cene, bez skrivenih troškova.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      serviceType: "Paljenje akumulatora kablovima",
      name: "Paljenje akumulatora kablovima Beograd",
      description:
        "Hitna pomoć na putu — paljenje ispražnjenog akumulatora pomoćnim kablovima na licu mesta, bilo gde u Beogradu, 24/7.",
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
          name: "Paljenje akumulatora kablovima",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function PaljenjeAkumulatoraPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />
      <main>
        <Breadcrumbs current="Paljenje akumulatora kablovima" />
        <ServiceHero
          eyebrow="Dostupni 24 sata, 7 dana u nedelji"
          title={
            <>
              PALJENJE AKUMULATORA
              <br />
              <span className="text-accent">KABLOVIMA</span>
            </>
          }
          subtitle="Vozilo neće da upali? Dolazimo na lice mesta, bilo gde u Beogradu, i startujemo akumulator pomoćnim kablovima za nekoliko minuta."
          image="/20240131_215459-1024x576.jpg"
          imageAlt="Paljenje akumulatora kablovima Strada 46"
        />

        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                Kada je potrebno
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-primary mt-3 mb-6">
                Kada vam je potrebno paljenje akumulatora?
              </h2>
              <p className="text-primary/70 text-lg leading-relaxed mb-8">
                Ispražnjen akumulator je jedan od najčešćih razloga zašto vozilo odbija da upali,
                naročito posle hladne noći ili dužeg mirovanja vozila. Evo najčešćih znakova da vam
                je potrebna pomoć:
              </p>
              <CheckList items={signs} />
            </div>

            <div className="mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                Kako radi usluga
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-primary mt-3 mb-6">
                Brzo i bezbedno paljenje na licu mesta
              </h2>
              <p className="text-primary/70 text-lg leading-relaxed">
                Pozovete nas na {PHONE}, kažete nam gde se tačno nalazite, i naš vozač kreće odmah
                sa opremom za paljenje akumulatora. Pomoćnim kablovima i profesionalnim starterima
                pokrećemo vaše vozilo bez rizika po njegovu elektroniku. U velikoj većini slučajeva
                vozilo je spremno za dalju vožnju za samo nekoliko minuta — bez potrebe za šlepom
                ili odlaskom u servis.
              </p>
            </div>

            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                Zašto Strada 46
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-primary mt-3 mb-6">
                Zašto izabrati nas za paljenje akumulatora
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
