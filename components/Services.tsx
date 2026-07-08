import Link from "next/link";

const services = [
  {
    title: "Šlep vozila",
    desc: "Bezbedno šlepujemo sva putnička vozila, kombije i dostavna vozila bez obzira na stanje i uzrok kvara. Koristimo savremenu opremu za utovar koja ne oštećuje karoseriju ni podvozje vašeg automobila. Šlepujemo i vozila koja nisu na neutralu.",
    icon: TruckIcon,
  },
  {
    title: "Deblokada i izvlačenje",
    desc: "Specijalizovani smo za izvlačenje vozila iz blata, snega, peska i nepristupačnih terena. Deblokada je moguća i kada je vozilo u kanalu, jarku ili u nemogućem položaju. Dolazimo opremljeni za svaku situaciju na terenu.",
    icon: WrenchIcon,
  },
  {
    title: "Paljenje akumulatora kablovima",
    desc: "Ostali ste bez akumulatora usred puta? Dolazimo brzo i pomoćnim kablovima startujemo vaše vozilo na licu mesta. Rešenje za par minuta, bez potrebe za šlepovanjem ili odlaskom u servis.",
    icon: BatteryIcon,
    href: "/paljenje-akumulatora-beograd",
  },
  {
    title: "Donošenje goriva",
    desc: "Ostali ste bez goriva na putu ili auto-putu? Donosimo vam benzin ili dizel direktno na lokaciju kako biste mogli da nastavite vožnju do najbliže pumpe, bez čekanja i nepotrebnog stresa.",
    icon: FuelIcon,
    href: "/dostava-goriva-beograd",
  },
  {
    title: "Prevoz vozila na adresu",
    desc: "Prevozimo vaše vozilo na bilo koju adresu u Beogradu, Srbiji ili regionu. Ukoliko imate kvar, udes ili vozilo jednostavno ne može samo da se kreće — mi ga bezbedno dopremamo tamo gde treba, uz punu odgovornost za teret.",
    icon: MapIcon,
  },
  {
    title: "Prevoz nakon udesa",
    desc: "Posle saobraćajne nesreće vozilo je često neupotrebljivo i mora da se skloni sa puta što pre. Strada 46 pruža brzu i diskretnu evakuaciju vozila sa mesta udesa — na servis, parkipalište ili bilo koju drugu adresu po vašem zahtevu.",
    icon: AlertIcon,
  },
  {
    title: "Odvoz do servisa ili tehničkog",
    desc: "Kvar vas je zatekao, ali ne znate gde da odnesete auto? Šlepujemo vozilo do auto-servisa, vulkanizera, tehničkog pregleda ili registracije na vašu željenu adresu. Brzo, pouzdano i bez gužve.",
    icon: ServiceIcon,
  },
  {
    title: "Prevoz na duže relacije",
    desc: "Pored Beograda, obavljamo i prevoz vozila na duže relacije — prema drugim gradovima Srbije i regionu. Idealno za kupovinu polovnog automobila, selidbu vozila ili transport neispravnog auta do udaljenog servisa.",
    icon: RouteIcon,
  },
  {
    title: "Dostupni 24/7",
    desc: "Kvar ne bira vreme — zato smo dostupni 24 sata dnevno, svih 365 dana u godini. Noću, vikendom, na praznike — uvek podižemo telefon i odmah kreću naši vozači ka vama.",
    icon: ClockIcon,
  },
  {
    title: "Brz dolazak",
    desc: "Na teritoriji Beograda stižemo u proseku za 30 minuta od vašeg poziva. Poznajemo grad i okolinu, biramo najbrži put i ne gubimo vreme. Što pre stignemo, što pre ste slobodni.",
    icon: ZapIcon,
  },
  {
    title: "Sva putnička vozila",
    desc: "Šlepujemo putničke automobile svih marki i modela, kombije, terence, kao i motocikle. Bez obzira na godište, gabarit ili stanje vozila — imamo odgovarajuću opremu i znanje za bezbedan prevoz.",
    icon: ShieldIcon,
  },
];

export default function Services() {
  return (
    <section id="usluge" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent text-primary text-sm font-bold px-4 py-1 rounded-full uppercase tracking-widest mb-4">
            Šta nudimo
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-4">
            Naše usluge
          </h2>
          <p className="text-primary/60 text-lg max-w-xl mx-auto">
            Profesionalna pomoć na putu — brzo, sigurno i pouzdano.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, desc, icon: Icon, href }) => {
            const cardContent = (
              <>
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/30 transition-colors">
                  <Icon />
                </div>
                <h3 className="text-accent font-bold text-xl mb-3">{title}</h3>
                <p className="text-white/65 leading-relaxed">{desc}</p>
                {href && (
                  <span className="inline-flex items-center gap-1 text-accent font-semibold text-sm mt-4">
                    Saznaj više
                    <ArrowRightIcon />
                  </span>
                )}
              </>
            );

            return href ? (
              <Link
                key={title}
                href={href}
                className="block bg-primary rounded-2xl p-6 hover:scale-[1.02] transition-transform group"
              >
                {cardContent}
              </Link>
            ) : (
              <div
                key={title}
                className="bg-primary rounded-2xl p-6 hover:scale-[1.02] transition-transform group"
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ArrowRightIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 18H5a2 2 0 01-2-2v-1M3 10V7a2 2 0 012-2h9a2 2 0 012 2v7m0 0h-3m3 0h1a2 2 0 002-2v-3a2 2 0 00-.586-1.414l-3-3A2 2 0 0016.414 4H15" />
      <circle cx="6.5" cy="18" r="1.5" strokeWidth={2} />
      <circle cx="18.5" cy="18" r="1.5" strokeWidth={2} />
    </svg>
  );
}

function WrenchIcon() {
  return (
    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function ZapIcon() {
  return (
    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  );
}

function ServiceIcon() {
  return (
    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10a1 1 0 011-1h13a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-4z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 10.5h2v3h-2" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 9l-2 3h2l-2 3" />
    </svg>
  );
}

function FuelIcon() {
  return (
    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 20V6a2 2 0 012-2h5a2 2 0 012 2v14M3 20h11" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10h2l3 3v5a1 1 0 01-1 1h-1a1 1 0 01-1-1v-2a1 1 0 00-1-1h-1" />
      <circle cx="17.5" cy="17.5" r="1" strokeWidth={2} />
    </svg>
  );
}

function RouteIcon() {
  return (
    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  );
}
