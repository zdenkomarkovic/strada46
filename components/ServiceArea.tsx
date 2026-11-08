import Link from "next/link";
import MapWrapper from "./MapWrapper";
import { areas as pageAreas, areaPath } from "@/lib/areas";
import PhoneLink from "./PhoneLink";

const areas = [
  {
    name: "Voždovac",
    desc: "Centar naše zone pokrivenosti. Šlep i deblokada vozila u Voždovcu — stižemo za 10–15 minuta.",
  },
  {
    name: "Banjica",
    desc: "Brza slep služba na Banjici i okolnim ulicama. Dostupni 24 sata, reagujemo odmah.",
  },
  {
    name: "Braće Jerković",
    desc: "Šlep vozila u naselju Braće Jerković. Iskusna ekipa sa savremenom opremom uvek na raspolaganju.",
  },
  {
    name: "Kaluđerica",
    desc: "Pokrivamo celokupno naselje Kaluđerica. Izvlačenje i prevoz vozila bez čekanja.",
  },
  {
    name: "Ripanj",
    desc: "Slep služba za Ripanj i okolna mesta. Poznajemo teren, stižemo brzo i bez komplikacija.",
  },
  {
    name: "Rakovica",
    desc: "Šlep i deblokada u opštini Rakovica. Jedno pozivanje — dolazimo bez obzira na vreme dana.",
  },
  {
    name: "Žarkovo",
    desc: "Brza pomoć na putu u Žarkovu. Šlepujemo sva putnička vozila i kombije.",
  },
  {
    name: "Lešće",
    desc: "Slep služba u Lešću — izvlačimo zapeta vozila i obavljamo prevoz do željene adrese.",
  },
  {
    name: "Konjarnik",
    desc: "Dostupni za šlep i deblokadu na Konajrniku. Reagujemo u roku od nekoliko minuta.",
  },
  {
    name: "Dedinje",
    desc: "Diskretan i profesionalan šlep vozila na Dedinjem. Pažljivo rukovanje svakim vozilom.",
  },
  {
    name: "Košutnjak",
    desc: "Pomoć na putu u Košutnjaku i okolini. Izvlačenje vozila iz teških pozicija bez oštećenja.",
  },
  {
    name: "Medaković",
    desc: "Slep služba za Medaković 1, 2 i 3. Brz dolazak i profesionalna usluga.",
  },
  {
    name: "Kumodraž",
    desc: "Naša baza je u Kumodražu, pa na poziv stižemo za oko 10 minuta. Šlep, deblokada i izvlačenje iz blata.",
  },
  {
    name: "Miljakovac",
    desc: "Miljakovac 1, 2 i 3. Bezbedno izvlačenje i utovar vozila na nagibu, uz vitlo i dodatno obezbeđenje točkova.",
  },
  {
    name: "Sunčani breg",
    desc: "Strmi prilazi i uske ulice nisu problem. Biramo vozilo koje može da priđe i izvlačimo auto vitlom.",
  },
  {
    name: "Resnik",
    desc: "Pomoć radnicima, dostavnim vozilima i vozačima u prolazu. Kratki i dugi prevozi do servisa.",
  },
  {
    name: "Autokomanda",
    desc: "Kvar na najprometnijoj raskrsnici juga grada? Stižemo brzo, obezbeđujemo mesto i uklanjamo vozilo sa kolovoza.",
  },
  {
    name: "Zvezdara",
    desc: "Od Bulevara kralja Aleksandra do Zvezdarske šume. Šlep i pomoć na putu u celoj opštini.",
  },
  {
    name: "Centar",
    desc: "Terazije, Knez Mihailova, Savamala. Šlep u pešačkim zonama i jednosmernim ulicama, bez blokiranja saobraćaja.",
  },
  {
    name: "Dorćol",
    desc: "Uske ulice, kapije i parking uz Dunav. Kolicima izvlačimo vozila iz tesnih mesta, bez oštećenja susednih automobila.",
  },
  {
    name: "Čukarica",
    desc: "Banovo brdo, Čukarička padina i Ada Ciganlija. Šlep na strmim ulicama i u letnjim gužvama.",
  },
  {
    name: "Mirijevo",
    desc: "Mirijevo 1, 2, 3 i 4. Brza pomoć kada auto ne upali u ranu zoru i kvar na Mirijevskom bulevaru.",
  },
  {
    name: "Savski venac",
    desc: "Senjak, Topčider i Bulevar vojvode Mišića. Platforma za osetljiva vozila i brz dolazak na prometne pravce.",
  },
  {
    name: "Vračar",
    desc: "Zonsko parkiranje i uske ulice u centru. Izvlačimo vozila iz tesnih mesta i podzemnih garaža bez oštećenja.",
  },
];

export default function ServiceArea() {
  return (
    <section id="oblast" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent text-primary text-sm font-bold px-4 py-1 rounded-full uppercase tracking-widest mb-4">
            Gde dolazimo
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-4">
            Oblast pokrivenosti
          </h2>
          <p className="text-primary/60 text-lg max-w-2xl mx-auto">
            Strada 46 pruža usluge šlepa, deblokade i prevoza vozila na
            teritoriji Kumodraža i svih naselja u krugu od 10 kilometara.
            Pokrivamo južni i centralni Beograd — brzo, pouzdano i 24/7.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border-2 border-primary/15 mb-12 shadow-lg">
          <MapWrapper />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {areas.map(({ name, desc }) => {
            const page = pageAreas.find((a) => a.name === name);
            const card = (
              <>
                <h3 className="font-black text-primary text-lg mb-2">
                  Šlep služba {name}
                </h3>
                <p className="text-primary/60 text-sm leading-relaxed">{desc}</p>
              </>
            );
            const cls =
              "block border-2 border-primary/15 rounded-2xl p-5 hover:border-accent hover:shadow-md transition-all";
            return page ? (
              <Link key={name} href={areaPath(page.slug)} className={cls}>
                {card}
              </Link>
            ) : (
              <div key={name} className={cls}>
                {card}
              </div>
            );
          })}
        </div>


        <div className="bg-primary rounded-2xl p-8 text-center">
          <p className="text-accent font-bold text-lg mb-1">
            Nije vaše naselje na listi?
          </p>
          <p className="text-white/75 mb-6">
            Pozovite nas — dolazimo i šire uz dogovor.
          </p>
          <PhoneLink className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-primary font-black px-8 py-3 rounded-xl transition-colors">
            <PhoneIcon />
            064/9-200-200
          </PhoneLink>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
    </svg>
  );
}
